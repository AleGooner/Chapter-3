class Person
    constructor: (@name) ->
        throw "Invalid name" if @name.length is 0

    getName: ->
        @name

window.GLOBALS.Person = Person


