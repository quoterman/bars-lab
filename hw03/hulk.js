var hulk = (function() {
    var set = undefined;
    var i;
    var setLen = set.length;
    return {
        select: function(selector) {
            set = document.querySelectorAll(selector);
            return this;
        },

        addClass: function(clsNames) {
            for(i = 0;i < setLen; i++){
                set[i].classList.add(clsNames);
            }
            return this;
        },

        append: function (tag) {
            var newTag = document.createElement(tag);
            for (var i = 0; i < setLen; i++) {
                set[i].appendChild(newTag);
            }
            return this;
        },

        attr: function() {
            if (arguments.length == 1){
            }else{
                if (arguments.length == 2){
                    for (var i = 0; i < setLen; i++) {
                        set[i].setAttribute(arguments[0], arguments[1]);
                    }
                }else{
                    //??????
                }
            }
            return this;
        },

        children: function() {
            var childNodes = set[0].childNodes;
            for(var i = 0,l = childNodes.length; i < l; i++) {
                alert(childNodes[i]);
            }
            return this;
        },

        css: function() {
            var style = [];
            if (arguments.length == 1){
                for (var i = 0; i < setLen; i++) {
                    style[i] = set[i].style.arguments[0];
                }
            }else{
                if (arguments.length == 2){
                    for (var i = 0; i < setLen; i++) {
                        set[i].style.arguments[0] = arguments[1];
                    }
                }else{
                    //??????
                }
            }
            return style;
        },

        empty: function() {
            for (var i = 0; i < setLen; i++) {
                set[i].innerHTML = "";
            }
            return this;
        },

        find: function(selector) {
            var findSet = [];
            for (var i = 0; i < setLen; i++) {
                findSet[i] = set[i].querySelectorAll(selector);
            }
            return this;
        },

        hasClass: function(className) {
            i = 0;
            while(set[i].classList.contains(className)){
                i++;
            }
            if(i === len){
                return true;
            }else{
                return false;
            }
        },

        html: function() {
            return set[0].innerHTML;
        },

        on: function(eventName, func) {
            for (var i = 0; i < setLen; i++) {
                set[i].eventName = func;
            }
            return this;
        },

        parent: function() {
            return set[0].parentNode;
        },

        remove: function() {
            for (var i = 0; i < setLen; i++){
                set[i].parentNode.removeChild(set[i]);
            }
            return this;
        },


        removeAttr: function(attrName) {
            for(var i = 0; i < setLen; i++) {
                set[i].removeAttribute(attrName);
            }
            return this;
        },

        removeClass: function(clsNames) {
            for(var i = 0; i < setLen; i++) {
                set[i].classList.remove(clsNames);
            }
            return this;
        },

        toggleClass: function(clsNames) {
            for(var i = 0; i < setLen; i++) {
                set[i].classList.toggle(clsNames);
            }
            return this;
        },


        unbind: function(eventName, func) {
            for(var i = 0; i < setLen; i++) {
                set[i].removeEventListener(eventName, func, false);
            }
            return this;
        },

        wrap: function(tagName) {
            var temp;
            for(var i = 0; i < setLen; i++) {
                temp = document.createElement(tagName);
                set[i].parentNode.appendChild(temp);
                temp.appendChild(set[i]);
            }
            return this;
        }

    };
})();
