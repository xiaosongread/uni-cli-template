export default function base64 (timestamp) {  
  // 将时间戳转换为日期对象  
  let data = String(timestamp);  
  let byteArray = [];  
  for (let i = 0; i < data.length; i++) {  
    let charCode = data.charCodeAt(i);  
    byteArray.push(charCode);  
  }  
    
  // 将字节数组转换为Base64编码  
  let base64 = wx.arrayBufferToBase64(new Uint8Array(byteArray))
  return base64;
}
