import React from "react";

const App = () => {
  // 01
  //সংক্ষিপ্ত সিনট্যাক্স:
  //সাধারন ফাংশনের তুলনায় অ্যারো ফাংশন সংক্ষিপ্ত। উদাহরণস্বরূপ:
  // Regular Function
  // const add = function (a, b) {
  //   return a + b;
  // };

  // // Arrow Function
  // const add = (a, b) => a + b;

  // 02
  //   লেক্সিক্যাল this বাইন্ডিং:
  // অ্যারো ফাংশনে this নিজস্ব কন্টেক্স্ট তৈরি করে না, বরং পারেন্ট স্কোপ থেকে this ইনহেরিট করে। এটি ইভেন্ট লিসেনার বা setTimeout-এ উপযোগী:

  // javascript
  // function Person() {
  //   this.age = 0;
  //   setInterval(() => {
  //     this.age++; // এখানে `this` Person অবজেক্টকে রেফার করে
  // }, 1000);
  //}

  // 03
  // ইম্প্লিসিট রিটার্ন:
  // সিঙ্গেল এক্সপ্রেশনের ক্ষেত্রে return কীওয়ার্ড লাগে না:
  // javascript
  // const double = num => num * 2;

  // 04
  // অ্যারে মেথডস (map, filter, reduce):
  // কলব্যাক ফাংশন হিসাবে অ্যারো ফাংশন জনপ্রিয়:
  // javascript
  // const numbers = [1, 2, 3];
  // const squared = numbers.map(n => n * n); // [1, 4, 9]

  // 05
  // প্রমিস ও অ্যাসিঙ্ক কোড:
  // .then() বা .catch()-এ ক্লিনার সিনট্যাক্স:
  // javascript
  // fetch(url)
  //   .then(response => response.json())
  //   .then(data => console.log(data)

  // 06
  // ১. বেসিক সিনট্যাক্স
  // নো প্যারামিটার:
  // javascript
  // const greet = () => "Hello!";

  // 07
  // সিঙ্গেল প্যারামিটার:
  // javascript
  // const square = x => x * x;

  // 08
  // মাল্টিপল প্যারামিটার:
  // javascript
  // const sum = (a, b) => a + b;

  // 09
  // মাল্টিলাইন ফাংশন:
  // javascript
  // const calc = (a, b) => {
  //   const result = a + b;
  //   return result * 2;
  // };

  // //  ২. অ্যারে মেথডস (map, filter, reduce)
  // map দিয়ে অ্যারে ট্রান্সফর্ম:

  // javascript
  // const numbers = [1, 2, 3];
  // const doubled = numbers.map(n => n * 2); // [2, 4, 6]

  // filter দিয়ে ফিল্টারিং:
  // javascript
  // const evens = numbers.filter(n => n % 2 === 0); // [2]

  // javascript
  // const evens = numbers.filter(n => n % 2 === 0); // [2]
  // reduce দিয়ে যোগফল:

  // javascript
  // const total = numbers.reduce((acc, num) => acc + num, 0); // 6
  // অবজেক্ট অ্যারে ম্যাপ:

  // javascript
  // const users = [{name: 'Alice'}, {name: 'Bob'}];
  // const names = users.map(user => user.name); // ['Alice', 'Bob']

  // ৩. ইম্প্লিসিট রিটার্ন
  // স্ট্রিং রিটার্ন:
  // javascript
  // const getName = id => ({ id: id, name: 'John' }); // অবজেক্ট রিটার্ন করতে () ব্যবহার
  // বুলিয়ান চেক:

  // javascript
  // const isEven = num => num % 2 === 0;
  // কন্ডিশনাল লজিক:

  // javascript
  // const getStatus = age => (age >= 18 ? 'Adult' : 'Minor');
  // ৪. ইভেন্ট হ্যান্ডলার
  // ক্লিক ইভেন্ট:

  // javascript
  // button.addEventListener('click', () => console.log('Clicked!'));

  // this বাইন্ডিং:

  // javascript
  // function Timer() {
  //   this.seconds = 0;
  //   setInterval(() => {
  //     this.seconds++; // Lexical `this`
  //   }, 1000);
  // }

  // ৫. প্রমিস ও অ্যাসিঙ্ক
  // প্রমিস চেইন:
  // javascript
  // fetch('url')
  //   .then(response => response.json())
  //   .then(data => console.log(data));

  // অ্যাসিঙ্ক/অ্যাওয়েট:
  // javascript
  // const fetchData = async () => {
  //   const res = await fetch('url');
  //   return res.json();
  // };

  // ৬. প্যারামিটার ডিফল্ট ভ্যালু
  // ডিফল্ট প্যারামিটার:
  // javascript
  // const greet = (name = 'Guest') => `Hello, ${name}!`;

  // ৭. ডেস্ট্রাকচারিং
  // অবজেক্ট ডেস্ট্রাকচারিং:
  // javascript
  // const getUser = ({ id, name }) => `User: ${name} (ID: ${id})`;

  // অ্যারে ডেস্ট্রাকচারিং:
  // javascript
  // const getFirst = ([first]) => first;

  // ৮. হাইয়ার-অর্ডার ফাংশন
  // ফাংশন রিটার্ন:
  // javascript
  // const multiplier = factor => num => num * factor;
  // const double = multiplier(2);
  // double(5); // 10

  // ৯. টাইমআউট ও ইন্টারভাল
  // setTimeout:
  // javascript
  // setTimeout(() => console.log('Time out!'), 1000);

  // setInterval:
  // javascript
  // setInterval(() => console.log('Tick'), 1000);

  // ১০. অ্যারে ম্যানিপুলেশন
  // ফাইন্ড:
  // javascript
  // const users = [{id: 1}, {id: 2}];
  // const user = users.find(u => u.id === 2);

  // সর্ট:
  // javascript
  // const sorted = [3, 1, 2].sort((a, b) => a - b);

  // সাম:
  // javascript
  // const sum = (arr) => arr.reduce((acc, val) => acc + val, 0);

  // ১১. ক্যালকুলেশন
  // এলিয়াস:
  // javascript
  // const PI = 3.1416;
  // const area = r => PI * r * r;

  // পাওয়ার:
  // javascript
  // const power = (base, exp) => base ** exp;

  // ১২. কন্ডিশনাল রেন্ডারিং
  // শর্ট-সার্কিট:
  // javascript
  // const render = (isLoggedIn) => isLoggedIn && renderDashboard();

  // ১৩. ক্লোজার
  // কাউন্টার:
  // javascript
  // const counter = () => {
  //   let count = 0;
  //   return () => count++;
  // };
  // const increment = counter();
  // increment(); // 0, 1, 2...

  // ১৪. রিকার্শন
  // ফ্যাক্টোরিয়াল:
  // javascript
  // const factorial = n => (n <= 1 ? 1 : n * factorial(n - 1));

  // ১৫. ডেটা ট্রান্সফর্মেশন
  // অবজেক্ট টু অ্যারে:
  // javascript
  // const obj = { a: 1, b: 2 };
  // const arr = Object.keys(obj).map(key => ({ key, value: obj[key] }));

  // ১৬. ইউটিলিটি ফাংশন
  // র‍্যান্ডম নাম্বার:
  // javascript
  // const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  // ফরম্যাট টেক্সট:
  // javascript
  // const format = (str, ...args) => args.reduce((acc, arg) => acc.replace('{}', arg), str);
  // format('Hello, {}!', 'Alice'); // 'Hello, Alice!'

  // ১৭. ডম ম্যানিপুলেশন
  // ক্রিয়েট এলিমেন্ট:
  // javascript
  // const createElement = (tag, text) => {
  //   const el = document.createElement(tag);
  //   el.textContent = text;
  //   return el;
  // };

  // ১৮. ফাংশনাল প্রোগ্রামিং
  // কারি ফাংশন:
  // javascript
  // const add = a => b => a + b;
  // const add5 = add(5);
  // add5(3); // 8

  // ১৯. অবজেক্ট মেথডস (সতর্কতা সহ)
  // অ্যারে অবজেক্ট:
  // javascript
  // const math = {
  //   square: x => x * x, // Avoid using `this` here
  // };

  // ২০. এডভান্সড কেস
  // জেনারেটর ফাংশন:
  // javascript
  // const range = function*(start, end) {
  //   for (let i = start; i <= end; i++) yield i;
  // };

  // ২১. টেমপ্লেট লিটারাল
  // ডাইনামিক স্ট্রিং:
  // javascript
  // const greet = name => `Hello, ${name}!`;

  // ২২. এডভান্সড প্যারামিটার
  // রেস্ট প্যারামিটার:
  // javascript
  // const sumAll = (...nums) => nums.reduce((acc, num) => acc + num, 0);
  // sumAll(1, 2, 3); // 6

  // ২৩. এক্সেপশন হ্যান্ডলিং
  // ট্রাই-ক্যাচ:
  // javascript
  // const safeParse = json => {
  //   try {
  //     return JSON.parse(json);
  //   } catch (e) {
  //     return null;
  //   }
  // };

  // ২৪. ইউনিক আইডি জেনারেটর
  // UUID:
  // javascript
  // const uuid = () => crypto.randomUUID?.() || 'not-supported';

  // ২৫. মেমোইজেশন
  // ক্যাশিং:
  // javascript
  // const memoize = fn => {
  //   const cache = new Map();
  //   return arg => cache.has(arg) ? cache.get(arg) : cache.set(arg, fn(arg)).get(arg);
  // };

  // ২৬. ফাংশন কম্পোজিশন
  // পাইপলাইন:
  // javascript
  // const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);
  // const add2 = x => x + 2;
  // const mul3 = x => x * 3;
  // pipe(add2, mul3)(4); // (4+2)*3 = 18

  // ২৭. কাস্টম হুকস (React)
  // স্টেট ম্যানেজমেন্ট:
  // javascript
  // const useCounter = () => {
  //   const [count, setCount] = useState(0);
  //   const increment = () => setCount(c => c + 1);
  //   return { count, increment };
  // };

  // ২৮. ওয়েব ওয়ার্কার
  // ওয়ার্কার থ্রেড:
  // javascript
  // const worker = new Worker('worker.js');
  // worker.onmessage = e => console.log(e.data);

  // ২৯. টেস্টিং (Jest)
  // মক ফাংশন:
  // javascript
  // test('mock function', () => {
  //   const mockFn = jest.fn(() => 42);
  //   expect(mockFn()).toBe(42);
  // });

  // ৩০. এনিমেশন
  // রিকুয়েস্ট অ্যানিমেশন ফ্রেম:
  // javascript
  // const animate = () => {
  //   requestAnimationFrame(() => {
  //     console.log('Animating...');
  //     animate();
  //   });
  // };

  // ৩১. ডিবাগিং
  // লগিং:
  // javascript
  // const log = (msg) => (console.log(msg), msg);
  // log('Hello'); // 'Hello' logged and returned

  // ৩২. ওয়েব সকেট
  // সকেট ইভেন্ট:
  // savascript
  // const socket = new WebSocket('ws://localhost:8080');
  // socket.onmessage = event => console.log(event.data);

  // ৩৩. ফাইল রিডিং
  // FileReader:
  // javascript
  // const readFile = file =>
  //   new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.onload = () => resolve(reader.result);
  //     reader.onerror = reject;
  //     reader.readAsText(file);
  //   });

  // ৩৪. ওয়েব কম্পোনেন্ট
  // কাস্টম এলিমেন্ট:
  // javascript
  // class MyElement extends HTMLElement {
  //   connectedCallback() {
  //     this.innerHTML = `<button>Click</button>`;
  //     this.querySelector('button').onclick = () => alert('Clicked!');
  //   }
  // }
  // customElements.define('my-element', MyElement);
  // সতর্কতা:
  // অবজেক্ট মেথডে this ব্যবহার এড়িয়ে চলুন (যদি this ডায়নামিক প্রয়োজন হয়)।

  // কনস্ট্রাক্টর বা prototype মেথডে অ্যারো ফাংশন ব্যবহার করবেন না।

  // এই উদাহরণগুলি ES6 Arrow Functions-এর বিভিন্ন ব্যবহারিক ক্ষেত্র কভার করে। প্রয়োজন অনুসারে কোড অ্যাডাপ্ট করুন! 😊

  // ১. ফাংশনাল প্রোগ্রামিং টেকনিক
  // কারি ফাংশন (Currying):
  // javascript
  // const multiply = a => b => a * b;
  // const triple = multiply(3);
  // triple(5); // 15

  // ফাংশন কম্পোজিশন
  // javascript
  // const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);
  // const add5 = x => x + 5;
  // const square = x => x * x;
  // compose(square, add5)(2); // (2+5)^2 = 49
  // ট্রান্সডিউসার (Transducer):

  // javascript
  // const mapTransducer = f => reducer => (acc, val) => reducer(acc, f(val));
  // const filterTransducer = pred => reducer => (acc, val) => pred(val) ? reducer(acc, val) : acc;

  // ২. অ্যাসিঙ্ক্রোনাস প্যাটার্ন
  // অ্যাসিঙ্ক প্যারালাল রান:

  // javascript
  // const fetchAll = urls => Promise.all(urls.map(url => fetch(url)));

  // সিক্যুয়েন্সিয়াল প্রমিস চেইন:
  // javascript
  // const sequence = tasks => tasks.reduce((p, task) => p.then(task), Promise.resolve());

  // রিট্রি মেকানিজম:
  // javascript
  // const retry = (fn, retries = 3) => (...args) =>
  //   fn(...args).catch(err => retries > 0 ? retry(fn, retries - 1)(...args) : Promise.reject(err));

  // ৩. মেমোইজেশন ও অপ্টিমাইজেশন
  // ডিবাউন্সিং:
  // javascript
  // const debounce = (fn, delay) => {
  //   let timeout;
  //   return (...args) => {
  //     clearTimeout(timeout);
  //     timeout = setTimeout(() => fn(...args), delay);
  //   };
  // };

  // থ্রটলিং:
  // javascript
  // const throttle = (fn, limit) => {
  //   let inThrottle;
  //   return (...args) => {
  //     if (!inThrottle) {
  //       fn(...args);
  //       inThrottle = setTimeout(() => inThrottle = false, limit);
  //     }
  //   };
  // };

  // ল্যাজি লোডিং:
  // javascript
  // const lazyLoad = (loader) => {
  //   let loaded;
  //   return () => loaded || (loaded = loader().then(mod => mod.default));
  // };

  // ৪. ডেটা স্ট্রাকচার ও অ্যালগরিদম
  // লিংকড লিস্ট:

  // javascript
  // const Node = (value, next = null) => ({ value, next });
  // const createList = arr => arr.reduceRight((acc, val) => Node(val, acc), null);

  // বাইনারি সার্চ:

  // javascript
  // const binarySearch = (arr, target) => {
  //   const search = (low, high) =>
  //     low > high ? -1 : (mid =>
  //       arr[mid] === target ? mid :
  //       arr[mid] < target ? search(mid + 1, high) :
  //       search(low, mid - 1)
  //     )(Math.floor((low + high) / 2));
  //   return search(0, arr.length - 1);
  // };

  // ৫. রিয়েক্টিভ প্রোগ্রামিং (RxJS)
  // কাস্টম অপারেটর:
  // javascript
  // const customOperator = predicate => source =>
  //   new Observable(observer =>
  //     source.subscribe({
  //       next: value => predicate(value) && observer.next(value),
  //       error: err => observer.error(err),
  //       complete: () => observer.complete(),
  //     })
  //   );

  // ৬. ডাইনামিক প্রপার্টি অ্যাসাইনমেন্ট
  // কম্পিউটেড প্রপার্টি:
  // javascript
  // const dynamicKey = 'id';
  // const obj = { [dynamicKey]: 123 };
  // const getValue = key => obj[key];

  // ৭. মেটাপ্রোগ্রামিং (Proxy/Reflect)
  // ইমিউটেবল অবজেক্ট:
  // javascript
  // const immutable = obj => new Proxy(obj, {
  //   get: (target, prop) => typeof target[prop] === 'object' ? immutable(target[prop]) : target[prop],
  //   set: () => { throw new Error('Immutable!'); },
  // });

  //  লগিং প্রপার্টি অ্যাকসেস:
  // javascript
  // const logged = obj => new Proxy(obj, {
  //   get: (target, prop) => {
  //     console.log(`GET ${prop}`);
  //     return target[prop];
  //   },
  //   set: (target, prop, value) => {
  //     console.log(`SET ${prop}=${value}`);
  //     target[prop] = value;
  //     return true;
  //   },
  // });

  // ৮. ওয়েব ওয়ার্কার্স
  // ডেডিকেটেড ওয়ার্কার:
  // javascript
  // const worker = new Worker('worker.js');
  // worker.onmessage = e => console.log('Worker says:', e.data);
  // worker.postMessage('Start');
  // শেয়ার্ড ওয়ার্কার:

  // javascript
  // const sharedWorker = new SharedWorker('shared-worker.js');
  // sharedWorker.port.start();
  // sharedWorker.port.postMessage('Hello Shared Worker');

  // ৯. সার্ভিস ওয়ার্কার
  // ক্যাশিং স্ট্র্যাটেজি:

  // javascript
  // self.addEventListener('fetch', event =>
  //   event.respondWith(
  //     caches.match(event.request).then(res => res || fetch(event.request))
  //   )
  // );

  // ১০. ওয়েব অ্যাসেম্বলি
  // WASM লোডিং:
  // javascript
  // const loadWasm = async (url) =>
  //   (await WebAssembly.instantiateStreaming(fetch(url))).instance.exports;

  // ১১. ক্লাউড ফাংশনস (AWS Lambda)
  // হ্যান্ডলার:
  // javascript
  // exports.handler = async (event) => ({
  //   statusCode: 200,
  //   body: JSON.stringify({ message: 'Hello from Lambda!' }),
  // });

  // javascript
  // const hotFunction = (() => {
  //   const cache = new WeakMap();
  //   return obj => cache.get(obj) || cache.set(obj, compute(obj)).get(obj);
  // })();

  // ১৪. সিকিউরিটি
  // স্যানিটাইজেশন
  // javascript
  // const sanitize = str => str.replace(/<script.*?>.*?<\/script>/gi, '');
  // এনক্রিপশন (Web Crypto API):
  // javascript
  // const encrypt = async (data, key) =>
  //   window.crypto.subtle.encrypt({ name: 'AES-GCM' }, key, new TextEncoder().encode(data));

  // ১৫. গ্রাফিক্স (Canvas/WebGL)
  // ক্যানভাস ড্রয়িং:
  // javascript
  // const drawCircle = (ctx, x, y, r) => {
  //   ctx.beginPath();
  //   ctx.arc(x, y, r, 0, 2 * Math.PI);
  //   ctx.fill();
  // };
  // WebGL শেডার:

  // javascript
  // const vertexShader = gl.createShader(gl.VERTEX_SHADER);
  // gl.shaderSource(vertexShader, `void main() { gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`);
  // gl.compileShader(vertexShader);

  // ১৬. মেশিন লার্নিং (TensorFlow.js)
  // মডেল ট্রেইনিং:
  // javascript
  // const model = tf.sequential();
  // model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
  // model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });
  // model.fit(xTrain, yTrain, { epochs: 100 }).then(() => console.log('Trained!'));

  // ১৭. ডেকোরেটরস
  // লগিং ডেকোরেটর:
  // javascript
  // const logDecorator = fn => (...args) => {
  //   console.log('Arguments:', args);
  //   return fn(...args);
  // };
  // const add = logDecorator((a, b) => a + b);
  // add(2, 3); // Logs: Arguments: [2, 3], Returns: 5

  // ১৮. মাইক্রোফ্রন্টেন্ড
  // ডাইনামিক ইম্পোর্ট:
  // javascript
  // const loadMicroFrontend = name =>
  //   import(`./microfrontends/${name}.js`)
  //     .then(module => module.mount(document.getElementById('root')));

  // ১৯. রিয়েল-টাইম কমিউনিকেশন
  // WebRTC অফার/আনসার:
  // javascript
  // const createOffer = async (pc) => {
  //   const offer = await pc.createOffer();
  //   await pc.setLocalDescription(offer);
  //   return offer;
  // };

  // ২০. স্টেট ম্যানেজমেন্ট (Redux)
  // রিডিউসার:
  // javascript
  // const todosReducer = (state = [], action) =>
  //   action.type === 'ADD_TODO' ? [...state, action.payload] : state;
  // মিডলওয়্যার:

  // javascript
  // const loggerMiddleware = store => next => action => {
  //   console.log('Dispatching:', action);
  //   return next(action);
  // };

  // ২১. এডভান্সড ডম ম্যানিপুলেশন
  // ভার্চুয়াল DOM ডিফ:
  // javascript
  // const diff = (oldNode, newNode) =>
  //   Object.keys(newNode.props).some(prop => oldNode.props[prop] !== newNode.props[prop]);

  // ২২. ইন্টারন্যাশনালাইজেশন
  // ডাইনামিক ট্রান্সলেশন:
  // javascript
  // const i18n = (key, lang = 'en') => translations[lang][key] || key;

  // ২৩. এডভান্সড এরর হ্যান্ডলিং
  // এরর বাউন্ডারি (React):

  // javascript
  // class ErrorBoundary extends React.Component {
  //   state = { hasError: false };
  //   static getDerivedStateFromError = () => ({ hasError: true });
  //   componentDidCatch = (error, info) => logError(error, info);
  //   render = () => this.state.hasError ? <Fallback /> : this.props.children;
  // }

  // ২৪. টেমপোরাল ডেটা (Luxon)
  // ফরম্যাট টাইম:
  // javascript
  // const formatTime = (isoString, format = 'ff') =>
  //   DateTime.fromISO(isoString).toFormat(format);

  // ২৫. কো-রুটিনস
  // জেনারেটর-বেজড কো-রুটিন:
  // javascript
  // function* coroutine() {
  //   const data = yield fetch('url');
  //   yield process(data);
  // }

  // ২৬. এডভান্সড টেস্টিং
  // মক API রিকুয়েস্ট:
  // javascript
  // const mockFetch = (response) =>
  //   jest.fn(() => Promise.resolve({ json: () => Promise.resolve(response) }));
  // স্ন্যাপশট টেস্টিং:

  // javascript
  // test('Component snapshot', () => {
  //   const component = render(<MyComponent />);
  //   expect(component.toJSON()).toMatchSnapshot();
  // });

  // ২৭. ডাইনামিক কোড এক্সিকিউশন
  // স্যান্ডবক্সড ইভ্যাল:
  // javascript
  // const safeEval = code => new Function(`return (${code})`)();
  // ২৮. পার্সার্স ও কম্পাইলারস
  // AST ট্রাভার্সাল:

  // javascript
  // const traverseAST = (ast, visitor) =>
  //   ast.forEach(node => visitor(node) && traverseAST(node.children, visitor));
  // ২৯. ওয়েব কম্পোনেন্ট লাইফসাইকেল
  // অবজার্ভ অ্যাট্রিবিউটস:

  // javascript
  // class MyElement extends HTMLElement {
  //   static observedAttributes = ['disabled'];
  //   attributeChangedCallback = (name, oldVal, newVal) =>
  //     console.log(`${name} changed from ${oldVal} to ${newVal}`);
  // }

  // ৩০. ক্লাউড-নেটিভ ডেভেলপমেন্ট
  // কনফিগ ম্যানেজমেন্ট:
  // javascript
  // const getConfig = async (env) =>
  //   (await fetch(`/config.${env}.json`)).json();

  // ৩১. এডভান্সড রাউটিং
  // ডাইনামিক রাউট লোডিং:
  // javascript
  // const loadRoute = path =>
  //   import(`./routes/${path}.js`).catch(() => import('./routes/404.js'));

  // ৩২. স্ট্রীম প্রসেসিং
  // Node.js স্ট্রীম ট্রান্সফর্ম:

  // javascript
  // const { Transform } = require('stream');
  // const upperCaseTransform = new Transform({
  //   transform: (chunk, _, done) => done(null, chunk.toString().toUpperCase()),
  // });

  // ৩৩. এআই প্রম্পটিং
  // জেনেরেটিভ AI ইন্টিগ্রেশন:

  // javascript
  // const generateText = async (prompt) =>
  //   (await fetch('https://api.openai.com/v1/completions', {
  //     method: 'POST',
  //     headers: { 'Authorization': `Bearer ${API_KEY}` },
  //     body: JSON.stringify({ prompt, model: 'text-davinci-003' }),
  //   })).json();

  // ৩৪. কোয়ান্টাম কম্পিউটিং (Qiskit)
  // কোয়ান্টাম সার্কিট:
  // javascript
  // const circuit = new QuantumCircuit(2);
  // circuit.h(0);
  // circuit.cx(0, 1);
  // circuit.measureAll();

  // ৩৫. ব্লকচেইন
  // সিম্পল ব্লক মাইনিং:
  // javascript
  // const mineBlock = (prevHash, data) => {
  //   let nonce = 0;
  //   while (!isValidHash(prevHash + data + nonce)) nonce++;
  //   return { prevHash, data, nonce, hash: computeHash(prevHash + data + nonce) };
  // };

  // ৩৬. স্পেসিফিকেশন প্যাটার্ন
  // ফ্লুেন্ট ইন্টারফেস:
  // javascript
  // const fluent = (obj) =>
  //   new Proxy(obj, {
  //     get: (target, prop) =>
  //       typeof target[prop] === 'function' ?
  //       (...args) => (target[prop](...args), fluent(target)) :
  //       target[prop],
  //   });

  return (
    <div>
      <h1>All Arrow Function Syntax</h1>
    </div>
  );
};

export default App;
