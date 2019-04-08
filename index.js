/*
Author: Osman Çakmak
Skype: oxcakmak
Email: oxcakmak@hotmail.com
Website: http://oxcakmak.com/
Country: Turkey [TR]
*/

var _send = XMLHttpRequest.prototype.send;
XMLHttpRequest.prototype.send = function() {
    /* Wrap onreadystaechange callback */
    var callback = this.onreadystatechange;
    this.onreadystatechange = function() {             
        if (this.readyState == 4) {
            //Success Then
        }
        callback.apply(this, arguments);
    }

    _send.apply(this, arguments);
}
