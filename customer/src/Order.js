import React, { useState } from 'react';
import ReactDOM from "react-dom";
import "./Order.css";

function Order() {
  const [select, setSelect] = useState('p');
  const handleSelectChange = e => {
    setSelect(e.target.value);
    console.log("After: " + select);
    Calculate(e.target.value);
  };
  function Calculate(tmp) {
    console.log("In the : " + select);
    var price = [10, 20, 30, 40, 50, 60];
    var name = ["A", "B", "C", "D", "E", "F"];
    var Dprice = [100, 200, 300, 400, 500, 600];
    var Dname = ["a", "b", "c", "d", "e", "f"];
    var sum = 0;
    var checkBox = [];
    var show = [];
    var drink = (tmp === undefined)? select: tmp;

    checkBox[0] = document.getElementById("myCheck");
    checkBox[1] = document.getElementById("myCheck2");
    checkBox[2] = document.getElementById("myCheck3");
    checkBox[3] = document.getElementById("myCheck4");
    checkBox[4] = document.getElementById("myCheck5");

    show[0] = document.getElementById("show");
    show[7] = document.getElementById("show7");

    show[1] = document.getElementById("show1");
    show[2] = document.getElementById("show2");
    show[3] = document.getElementById("show3");
    show[4] = document.getElementById("show4");
    show[5] = document.getElementById("show5");
    show[6] = document.getElementById("show6");

    var idx = 1;
    var num_checked = 0;
    for (var i = 0; i < 5; i++) {
      if (drink === Dname[i]) {
        show[idx].value = Dname[i] + " : " + Dprice[i] + "元";
        idx++;
        sum += Dprice[i];
        num_checked++;
      }
    }
    for (var i = 0; i < 5; i++) {
      if (checkBox[i].checked === true) {
        show[idx].value = name[i] + " : " + price[i] + "元";
        idx++;
        sum += price[i];
        num_checked++;
      }
    }
    for (var i = 6; i > num_checked; i--) {
      show[i].value = "";
    }

    show[7].value = sum;
  }

  return (
    <div className="Order">
      <div class="title">
        先前累積消費
        <input type="text" id="show" />
      </div>
      <div class="container">
        <div class="drinks">
          <p id="ordered_header"> 飲品： </p>
          <div class="product">
            <label>a: 100元</label>
            <input type="radio" value="a" checked={select === "a"} onClick={(e) => handleSelectChange(e)} />
            <br />
            <label>b: 200元</label>
            <input type="radio" value="b" checked={select === "b"} onClick={(e) => handleSelectChange(e)} />
            <br />
            <label>c: 300元</label>
            <input type="radio" value="c" checked={select === "c"} onClick={(e) => handleSelectChange(e)} />
            <br />
            <label>d: 400元</label>
            <input type="radio" value="d" checked={select === "d"} onClick={(e) => handleSelectChange(e)} />
            <br />
            <label>e: 500元</label>
            <input type="radio" value="e" checked={select === "e"} onClick={(e) => handleSelectChange(e)} />
            <br />
         </div>
        </div>
        <div class="food">
          <p id="ordered_header"> 食物： </p>
          <div class="product">
            <label>A: 10元</label>
            <input type="checkbox" id="myCheck" onClick={() => Calculate()} />
            <br />
            <label>B: 20元</label>
            <input type="checkbox" id="myCheck2" onClick={() => Calculate()} />
            <br />
            <label>C: 30元</label>
            <input type="checkbox" id="myCheck3" onClick={() => Calculate()} />
            <br />
            <label>D: 40元</label>
            <input type="checkbox" id="myCheck4" onClick={() => Calculate()} />
            <br />
            <label>E: 50元</label>
            <input type="checkbox" id="myCheck5" onClick={() => Calculate()} />
            <br />
         </div>
        </div>
      </div>
      <div class="buttom">
        <div class="show_total">
          此筆訂單共 <input type="text" id="show7" /> 元
          <input type="button" value="送出" />
        </div>
        <input type="text" id="show1" />
        <input type="text" id="show2" />
        <br />
        <input type="text" id="show3" />
        <input type="text" id="show4" />
        <br />
        <input type="text" id="show5" />
        <input type="text" id="show6" />
      </div>
    </div>
  );
}

export default Order;
