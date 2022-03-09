
let dog = {

    sound: "au au ",

    speak: function(){
        console.log(this.sound)
    }

}
let cat = {

    sound: "miau",

    speak: function(){
        console.log(this.sound)
    }

}

dog.speak()
cat.speak()

//-----------------------------------------------------------

function speakGeneric(){
    console.log(this.sound)
}

let dog1 = {

    sound: "au au 1 ",

    speak: speakGeneric

}
let cat1 = {

    sound: "miau 1",

    speak: speakGeneric

}

dog1.speak()
cat1.speak()

// -----------------------------------------------------------------

function speakGeneric(){
    console.log(this.sound)
}

let dog3 = {

    sound: "au au 1 ",

    speak: speakGeneric

}
let cat2 = {

    sound: "miau 2",

    speak: speakGeneric

}

var speakGenericbinded = speakGeneric.bind(cat2) // bind serve para dar contexto ao this

speakGenericbinded()
