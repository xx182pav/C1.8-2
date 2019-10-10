jQuery.prototype.text = function() {
    this.each(element => element.text())
    return this;
}