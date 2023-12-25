export function validatIp(ip) {  
  if (/^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/.test(ip)) {  
    return (true)  
  }  
  alert("You have entered an invalid IP address!")  
  return (false)  
}