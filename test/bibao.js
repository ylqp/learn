

var a = {
    title: 'hello',
    alias: this.title,
    show: function () {
        console.log(1, this.title)
        console.log(2, this.alias)
    },
    ashow: () => {
        console.log(3, this.title)
        console.log(4, this.alias)
    }
}

a.show()
var b = a.show
b()
a.ashow()