function receivesAFunction(callback){
    return callback()
}

function returnsANamedFunction(){
    return function namedFuntion(){
    }
}

function returnsAnAnonymousFunction(){
    return function(){
    }
}