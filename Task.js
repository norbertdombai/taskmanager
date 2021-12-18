class Task {
    constructor(node, adat){
        this.node = node;
        this.adat= adat;
        this.nevElem = $('#tasknev')
        this.leirasElem = $('#leiras')
        this.allapotElem = $('#allapot')
        this.hataridoElem = $('#hatarido')
        this.keszitoElem = $('#keszito')

        this.setAdat(this.adat)
    }

}