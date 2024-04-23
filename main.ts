navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

/***** ユーザーの現在の位置情報を取得 *****/
function successCallback(position: GeolocationPosition) {
  var gl_text = "緯度：" + position.coords.latitude + "<br>";
    gl_text += "経度：" + position.coords.longitude + "<br>";
    gl_text += "高度：" + (position.coords.altitude !== null ? position.coords.altitude : "情報なし") + "<br>";
    gl_text += "緯度・経度の誤差：" + position.coords.accuracy + "<br>";
    gl_text += "高度の誤差：" + (position.coords.altitudeAccuracy !== null ? position.coords.altitudeAccuracy : "情報なし") + "<br>";
    gl_text += "方角：" + (position.coords.heading !== null ? position.coords.heading : "情報なし") + "<br>";
    gl_text += "速度：" + (position.coords.speed !== null ? position.coords.speed : "情報なし") + "<br>";
  document.getElementById("show_result")!.innerHTML = gl_text;
}

/***** 位置情報が取得できない場合 *****/
function errorCallback(error: GeolocationPositionError) {
  var err_msg = "";
  switch(error.code)
  {
    case 1:
      err_msg = "位置情報の利用が許可されていません";
      break;
    case 2:
      err_msg = "デバイスの位置が判定できません";
      break;
    case 3:
      err_msg = "タイムアウトしました";
      break;
  }
  document.getElementById("show_result")!.innerHTML = err_msg;
  //デバッグ用→　document.getElementById("show_result").innerHTML = error.message;
}
