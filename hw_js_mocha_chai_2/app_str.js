class MyString extends String {
  remove(index){
    if (index < 0 || index > this.length) return this;
    return this.slice(0, index) + this.slice(index + 1);
  }
  insert(index, sign){
    if (index > this.length - 1) return this + sign;
    if (index < 0) return sign + this;
    return this.slice(0, index) + sign + this.slice(index + 1);
  }
  trimSign(){
    if(!this.length){
      throw new Error('Не задана строка.');
    }else{
      let arr = []
      for(let i = 0; i < this.length; i++){
        if (this[i + 1] !== this[i]) arr.push(this[i])
      }
      return arr.join('')
    }
  }
  toggle(){
    return this.split('').map(elem => {
      return elem = (elem !== elem.toUpperCase()) ? elem.toUpperCase() : elem.toLowerCase()
    }).join('')
  }
  counter(sign){
    if(sign){
      return this.split('').reduce((accum, elem) => {
        if (elem === sign) accum++;
        return accum;
      }, 0)
    }else{
      throw new Error('Для поиска не задана буква.')
    }

    // let num = 0;
    //если не привязываться к регистру
    // this.toLowerCase().split('').map(elem => {
    //   if (elem === sign) num++;
    // })
    // this.split('').map(elem => {
    //   if (elem === sign) num++;
    // })
    // return num;
  }
}
