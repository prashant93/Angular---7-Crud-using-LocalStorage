export class Init {
    load() {
      if(localStorage.getItem('employees') === null || localStorage.getItem('employees') == undefined) {
        console.log('No employees Found... Creating...');
        let emps = [
          {
            id:1,
            firstName:'Prashant',
            lastName:'Panigrahi',
            languages: ['Hindi','English']
          }, 
          {
            id:2,
            firstName:'Abhishek',
            lastName:'Singh',
            languages: ['Hindi','Marathi']
          }, {
            id:3,
            firstName:'Akshay',
            lastName:'Rathod',
            languages: ['Hindi','English','Marathi']
          },
        ];
  
        localStorage.setItem('employees', JSON.stringify(emps));
        return 
      } else {
        console.log('Found employees...');
      }
    }
  }