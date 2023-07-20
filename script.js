'use strict'

class Element{
    setId(elem , idName){
        elem.setAttribute('id' , idName )
        return this
    } 

    addClass(elem , className){
        elem.className.addClass(className)
        return this
    } 

    setContent(elem , content){
        elem.innerText = content
        return this
    } 

    addChild(elem , clildElem){
        elem.insertAdjacentHTML('afterbegin', childElem)
        return this
    }

    print(){

    }

}  

class DOMbuilder{ 
     constructor(){
         this.newElem = null
     }
      
    create(tagname){
        this.newElem = document.createElement(tagname)
        return this
    } 

    withClass(className){
         this.newElem.classList.add(className)
          return this 
    } 

    withId(id){
        this.newElem.setAttribute('id' , id)
        return this
    } 

    withContent(text){
        this.newElem.innerText = text
        return this
    } 

    addChild(child){
        
        this.newElem.insertAdjacentElement( 'afterbegin' , child)
        return this
    }

    result(){
        document.body.insertAdjacentElement('afterbegin' , this.newElem)
    }
}


let domBuilder = new DOMbuilder()
let myElement = new Element()
domBuilder.create('p').withId('p2').withContent('world').withClass('text').result()
domBuilder.create('p').withId('p1').withContent('hello').withClass('text').result()
domBuilder.create('div').withClass('conteiner').addChild(p1).addChild(p2).result()




console.dir(domBuilder)

