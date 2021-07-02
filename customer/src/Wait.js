import ReactDOM from "react-dom";
import "./Wait.css";

function Wait() {
    function show() {
        var number = [100101, 100102];
        var product = ["炸物拼盤", "今日特調"];

        var table = document.getElementById("ordered_list");
        var array = table.getElementsByTagName("tr");

        for(var i = 1; i < array.length; i++) {
            var id = array[i].children;
            id[0].innerHTML = product[i-1];
            id[1].innerHTML = number[i-1];

        }
    }

    return (
        <div className="Wait">
            <div class="title">
                已送出訂單
            </div>
            <button type="button" onClick={() => show()}> 顯示 </button>
            <div class="container">
                <p id="ordered_content"> 訂單內容 </p>
                <table id="ordered_list" border="1px">
                    <tr>
                        <td width="200px">商品名稱</td>
                        <td width="200px">商品編號</td>
                    </tr>
                    <tr>
                        <td width="200px" input type="text" id="prod">000</td>
                        <td width="200px" input type="text" id="numb">111</td>
                    </tr>
                    <tr>
                        <td width="200px" input type="text" id="prod1">222</td>
                        <td width="200px" input type="text" id="numb1">333</td>
                    </tr>
                </table>
            </div>
            <div class="message">
                請耐心等候
            </div>
            <div class="main__button">
                <button type="button"> 回首頁 </button>
            </div>
        </div>
    );
}

export default Wait;