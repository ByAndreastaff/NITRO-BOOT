import fs from 'fs';
import path from 'path';

let handler = async (m, { conn }) => {
    // Verificar si el modo NSFW está habilitado
    if (!global.db.data.chats[m.chat].nsfw) return m.reply(`El grupo no admite contenido *NSFW.*`);

    // Reacción actualizada
    m.react('🔥');

    // Lista de imágenes actualizadas
    let imagenes = [
"https://cinepornogratis.com/wp-content/uploads/2021/08/panties-porn.jpg",  
"https://e1nn.com/a/cache955/391/39186.jpg",  
"https://titis.org/uploads/posts/2021-11/thumbs/1637397958_3-titis-org-p-porn-with-lace-panties-porno-4.jpg",  
"https://static-ca-cdn.eporner.com/gallery/Er/WP/J5lb8o4WPEr/661445-matching-socks-and-panties.jpg",  
"https://cdn77-pic.xvideos-cdn.com/videos/thumbs169lll/8b/dc/d2/8bdcd21b6e780b28b0744071001f1f3b/8bdcd21b6e780b28b0744071001f1f3b.12.jpg",  
"https://cdn77-pic.xvideos-cdn.com/videos/thumbs169ll/f8/d6/10/f8d610c59ad4e0bbaad1d474d93f1104-2/f8d610c59ad4e0bbaad1d474d93f1104.29.jpg",  
"http://www.equbits.com/panty-porn-xxx-1026/littl-girls-wet-panties-xxx-12343.jpg",  
"https://di.phncdn.com/videos/202108/07/392546751/original/(m=eGNdHgaaaa)(mh=cwVRfAqmPJ9ppCM8)12.jpg",  
"https://ei.phncdn.com/videos/202110/30/397237271/original/(m=eaAaGwObaaaa)(mh=4chUFT5V-4MBVjVV)15.jpg",  
"https://www.voyeurstyle.com/contents/videos_screenshots/4000/4019/768x432/11.jpg",  
"https://di.phncdn.com/videos/202205/27/408861831/original/(m=eaf8Ggaaaa)(mh=miWqwXVBZAsIlYqm)1.jpg",  
"http://perfectgirlsex.net/g30/thumbs/173/476_up-custom-.jpg",  
"https://img-l3.xnxx-cdn.com/videos/thumbs169lll/a4/05/0a/a4050ab8e28450a8e57840ec4607b43c/a4050ab8e28450a8e57840ec4607b43c.7.jpg",  
"http://xxx-free.net/t12/thumbs/339/942.jpg",  
"https://tns.bangtubevideos.com/12/ff/12ff0cffe2_14.jpg",  
"https://www.pantypit.com/wordpress/wp-content/uploads/2014/05/wetwhitepantyshower2.jpg",
"https://s.smutty.com/media_smutty/j/u/l/i/p/julian93-60dxq-10467e.jpg",
"https://thumb-p4.xhcdn.com/a/O0B7K7ciMepmpj2r0dWjVA/000/106/487/384_1000.jpg",
"https://esbabes.com/wp-content/uploads/2022/06/Arina-Hashimoto-y-Yua-Mikami-8.jpg"
    ];

    const imagen = imagenes[Math.floor(Math.random() * imagenes.length)]; // Selección aleatoria de imagen

    // Envío de la imagen sin mensaje ni mención
    await conn.sendMessage(m.chat, { 
        image: { url: imagen }
    }, { quoted: m });
};

handler.help = ['panties'];
handler.tags = ['nsfw'];
handler.command = ['panties'];
handler.group = true;

export default handler;

