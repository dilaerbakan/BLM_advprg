class Kullanici {
    constructor (id, name, date, kadi, sifre ) {
        this.id= id;
        this.name= name;
        this.date = date;
        this.date = date;
        this.kadi = kadi;
        this.sifre=sifre;
        this.sikayet;  
    }
    toString () {
        return this.id+'';
    }
}

class Sikayet {
    constructor (id, tur, icerik) {
        this.id= id;
        this.tur= tur;
        this.icerik = icerik;
        
    }
    toString () {
        return this.id+'';
    }
}


class Database{
    constructor () {
        this.kullanicilar = new Map()
        this.sikayetler=new Map()
		this.sikayetList=new Array();
        //this.login=new Map()

}


addKullanici() {
const k1=new Kullanici(1, "Dila Erbakan", "30.05.1996", "dila", 3548)  
//şikayetlere tür ve icerik eklersin
const s1=new Sikayet(1, "Proposition","Content can be better")  
k1.sikayet=s1

this.kullanicilar.set(k1.id, k1)
this.sikayetler.set(s1.id, s1)
 this.sikayetList.push(s1);
//this.login.set(k1.k_adi, k1.sifre)

const k2=new Kullanici(2, "Ayse Sena Feyiz", "26.02.1996", "ayse", 1996)  
//şikayetlere tür ve icerik eklersin
const s2=new Sikayet(2, "Request","I want to change my password")  
k2.sikayet=s2

this.kullanicilar.set(k2.id, k2)
this.sikayetler.set(s2.id, s2)
 this.sikayetList.push(s2);
//this.login.set(k2.k_adi, k2.sifre)

const k3=new Kullanici(3, "Sila Gok", "08.05.1997", "sila", 3434)  
//şikayetlere tür ve icerik eklersin
const s3=new Sikayet(3, "Complaint","Your feedback is too slow")  
k3.sikayet=s3

this.kullanicilar.set(k3.id, k3)
this.sikayetler.set(s3.id, s3)
 this.sikayetList.push(s3);
//this.login.set(k3.k_adi, k3.sifre)


const k4=new Kullanici(4, "Burak Uguz", "05.09.1995", "buguz", 5858)  
//şikayetlere tür ve icerik eklersin
const s4=new Sikayet(4, "Request","I want to see my old messages")  
k4.sikayet=s4

this.kullanicilar.set(k4.id, k4)
this.sikayetler.set(s4.id, s4)
 this.sikayetList.push(s4);
//this.login.set(k4.k_adi, k4.sifre)



  
}


}
