var value = 1;

const obj = {
  value: 100,
  foo() {
    // foo 메서드를 호출한 객체 obj가 this에 바인딩된다.
    console.log(this); // obj

    setTimeout(
      function () {
        console.log(this.value); // 100
        // bind에 현재 this인 obj를 this로 바인딩한다.
      }.bind(this),
      100
    );
  },
};

// 메서드를 호출한 객체인 obj가 this에 바인딩된다.
obj.foo();
