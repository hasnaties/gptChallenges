const allowed = ['name', 'email'];
const obj = {
  name: 'test0'
}

const result = obj.map((key) => key===allowed[0]);

console.log(result);