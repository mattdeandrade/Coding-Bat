/**Look for patterns like "zip" and "zap" in the string -- length-3, starting with 'z' and ending with 'p'. Return a string where for all such words, the middle letter is gone, so "zipXzap" yields "zpXzp".

Examples

zipZap('zipXzap') → zpXzp
zipZap('zopzop') → zpzp
zipZap('zzzopzop') → zzzpzp */

function zipZap(str){
    const size=str.length;
    let newStr="";
    for (let i=0; i<size;i++){
    if (str.charAt(i)==="z" && str.charAt(i+2)==="p"){
   
    {newStr=newStr+"zp";i=i+2;}
      
    }
      else newStr=newStr+str.charAt(i);
    }
    return newStr;
  }

  console.log(zipZap("zipXzap"));
  console.log(zipZap("zopzop"));
  console.log(zipZap("zzzopzop"));
  console.log(zipZap("zipXzap"));
  console.log(zipZap("zzzopzop"));
  console.log(zipZap("z"));
  console.log(zipZap("zi"));
  console.log(zipZap(""));
  console.log(zipZap("zzp"));
  console.log(zipZap("azbcppp"));
  console.log(zipZap("azbcpzpp"));