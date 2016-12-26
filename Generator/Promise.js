/**
 * Created by Administrator on 2016/12/26.
 */
Promise = function() {
    this.queue = [];
    this.value = null;
    this.status = 'pending';// 初始状态pending 完成状态fulfilled 拒绝状态rejected
};

Promise.prototype.getQueue = function(){
    return this.queue;
};
Promise.prototype.getStatus = function() {
    return this.status;
};
//设置状态
Promise.prototype.setStatus = function(s, value) {
    if (s === 'fulfilled' || s === 'rejected') {
        this.status = s;
        this.value = value || null;
        this.queue = [];
        //冻结promise对象 使其不可拓展 删除 修改
        let freezeObject = Object.freeze || function(){};
        freezeObject(this);// promise的状态是不可逆的
    } else {
        throw new Error({
            message: "doesn't support status: " + s
        });
    }
};
//判断状态
Promise.prototype.isFulfilled = function() {
    return this.status === 'fulfilled';
};
Promise.prototype.isRejected = function() {
    return this.status === 'rejected';
};
Promise.prototype.isPending = function() {
    return this.status === 'pending';
};
//添加then方法
Promise.prototype.then = function(onFulfilled, onRejected) {
    let handler = {
        'fulfilled': onFulfilled,
        'rejected': onRejected
    };
    //延迟
    handler.deferred = new Deferred();

    if (!this.isPending()) {//这里允许先改变promise状态后添加回调
        utils.procedure(this.status, handler, this.value);
    } else {
        this.queue.push(handler);//then may be called multiple times on the same promise;规范2.2.6
    }
    return handler.deferred.promise;//then must return a promise;规范2.2.7
};

let utils = (function(){
    let makeSignaler = function(deferred, type) {
        return function(result) {
            transition(deferred, type, result);
        }
    };
    //处理环节
    let procedure = function(type, handler, result) {
        let func = handler[type];
        //新建一个promise
        let def = handler.deferred;

        if (func) {
            try {
                let newResult = func(result);
                if (newResult && typeof newResult.then === 'function') {//thenable
                    // 此种写法存在闭包容易造成内存泄露，我们通过高阶函数解决
                    // newResult.then(function(data) {
                    //     def.resolve(data);
                    // }, function(err) {
                    //     def.reject(err);
                    // });
                    //PromiseA+规范，x代表newResult，promise代表def.promise
                    //If x is a promise, adopt its state [3.4]:
                    //If x is pending, promise must remain pending until x is fulfilled or rejected.
                    //If/when x is fulfilled, fulfill promise with the same value.
                    //If/when x is rejected, reject promise with the same reason.
                    newResult.then(makeSignaler(def, 'fulfilled'), makeSignaler(def, 'rejected'));//此处的本质是利用了异步闭包
                } else {
                    transition(def, type, newResult);
                }
            } catch(err) {
                transition(def, 'rejected', err);
            }
        } else {
            transition(def, type, result);
        }
    };

    let transition = function(deferred, type, result) {
        if (type === 'fulfilled') {
            deferred.resolve(result);
        } else if (type === 'rejected') {
            deferred.reject(result);
        } else if (type !== 'pending') {
            throw new Error({
                'message': "doesn't support type: " + type
            });
        }
    };

    return {
        'procedure': procedure
    }
})();

// 通过Deferred来操作Promise
Deferred = function() {
    this.promise = new Promise();
};

Deferred.prototype.resolve = function(result) {
    if (!this.promise.isPending()) {
        return;
    }

    let queue = this.promise.getQueue();
    for (let i = 0, len = queue.length; i < len; i++) {
        utils.procedure('fulfilled', queue[i], result);
    }
    this.promise.setStatus('fulfilled', result);
};

Deferred.prototype.reject = function(err) {
    if (!this.promise.isPending()) {
        return;
    }

    let queue = this.promise.getQueue();
    for (let i = 0, len = queue.length; i < len; i++) {
        utils.procedure('rejected', queue[i], err);
    }
    this.promise.setStatus('rejected', err);
};
module.exports = Deferred;
