if (typeof publicPathRelativeToHtml !== 'undefined') {
    __webpack_public_path__ = publicPathRelativeToHtml;
}

var someObject = {
    someMethod: function () {
        var self = this;

        require.ensure([], function () {
            require('services/serviceOne');

            alert(this === self);
        }.bind(this));
        require.ensure([], function () {
            require('services/serviceTwo');

            alert(this === self);
        }.bind(this));
    }
};

someObject.someMethod.call({});
