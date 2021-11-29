import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'badWords'
})
export class BadWordsPipe implements PipeTransform {

  list = ["ANUS", "BABA-OVO", "BABAOVO", "BABACA", "BACURA", "BAGOS", "BAITOLA", "BEBUM", "BESTA", "BICHA", "BISCA", "BIXA", "BOAZUDA", "BUCETA", "BOCO", "BOIOLA", "BOLAGATO", "BOQUETE", "BOLCAT", "BOSSETA", "BOSTA", "BOSTANA", "BRECHA", "BREXA", "BRIOCO", "BRONHA", "BUCA", "BUNDA", "BUNDUDA", "BURRA", "BURRO", "CACHORRA", "CACHORRO", "CADELA", "CAGA", "CAGADO", "CAGAO", "CAGONA", "CANALHA", "CARALHO", "CASSETA", "CASSETE", "CHECHECA", "CHERECA", "CHIBUMBA", "CHIBUMBO", "CHIFRUDA", "CHIFRUDO", "CHOTA", "CHOCHOTA", "CHUPADA", "CHUPADO", "VIADO", "BIXA", "PAU", "CU", "VIADINHO", "GORDO", "GORDA"];
  placeHolder = '*';
  regex = '/[^a-zA-Z0-9|\$|\@]|\^/g';
  replaceRegex = '/\w/g';

  transform(value: string) {
      if (value === undefined || value === '') {
          return '';
      }
      
      return this.clean(value);
  }


  isProfane(string:string) {
      const result = this.list
          .filter((word) => {
              const wordExp = new RegExp(`\\b${word.replace(/(\W)/g, '\\$1')}\\b`, 'gi');
              return wordExp.test(string.toUpperCase());
          })
          .length > 0 || false;
      return result;
  }

  replaceWord(string:string) {
      return `****`;
  }

  clean(string:string) {
      const result = string.split(/\b/).map((word) => {
          return this.isProfane(word) ? this.replaceWord(word) : word;
      }).join('');
      

      return result;
  }

}
