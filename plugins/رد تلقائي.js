//*رد بوت ساسكي تبع ايتاتشي
// معلش ي ايتاتشي كسلت اعمل واحده 😀
// اعمل واحده بس احط رد تل

let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^هلا$/i.test(m.text)) { 
     responses = [ 
 '*ارحب*'  
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       '*وعليكم السلام*',  
     ]; 
   }else if (/^جاك$/i.test(m.text)) { 
     responses = [ 
'*عاوز اي🗿*'
     ]; 
 }else if (/^شحالك|عامل اي$/i.test(m.text)) { 
     responses = [ 
'*بخير طول منتا بخير*'
     ]; 
   }else if (/^جاك هل انت مرتبط$/i.test(m.text)) { 
     responses = [ 
'*لا ومش عايز ارتبط🏌🏻‍♂💔*'
   ]; 
   }else if (/^بتحبني|بوت $/i.test(m.text)) { 
     responses = [ 
'*بموتفيك 🌚*',
]; 
   }else if (/^تكرهني؟$/i.test(m.text)) { 
     responses = [ 
'*اكيد اكرهك 🙂😂*',
     
     }else if (/^هاي$/i.test(m.text)) { 
     responses = [ 
       '*وعليكم الهاي ورحمة الله وبركاته*',  

     ]; 
}else if (/^بحبك/i.test(m.text)) { 
     responses = [ 
       '*بحبك اكتر🌚*',  

     ]; 
   }else if (/^فلسطين$/i.test(m.text)) { 
     responses = [ 
'عاشششش تفهم'
     ]; 
   } else if (/^احبك$/i.test(m.text)) { 
     responses = [ 
'*انطر من هنا*'
     ]; 
     }else if (/^عامل ايه|عامل اي|عامل اية$/i.test(m.text)) { 
     responses = [ 
       'خدتك علية 🤭',  

     ];
     }else if (/^تحبني$/i.test(m.text)) { 
     responses = [ 
       'براااااااع',  

     ];
     }else if (/^جاك$/i.test(m.text)) { 
     responses = [ 
       'قلبو 🌚',  

     ];
     }else if (/^بوت$/i.test(m.text)) { 
     responses = [ 
       '*اسمي جاك يعم بق 🙂*',  

     ];
     }else if (/^اهلا$/i.test(m.text)) { 
     responses = [ 
       '*🙂*',  

     ]; 
     }else if (/^مساء|مساء$/i.test(m.text)) { 
     responses = [ 
       'مساء الخير',  

     ];
     }else if (/^صباحو$/ .test(m.text)) { 
     responses = [ 
       '*صباح الورد🧸*',  
     ];
       }else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى ال .*',  
     ];
            }else if (/^Nezuko$/i.test(m.text)) { 
     responses = [ 
       '*تانجيرو☹️*',  
     ];
            }else if (/^مرحبا$/i.test(m.text)) { 
     responses = [ 
       '*مرحبا🧸*',  
     ];
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
