// const colorThief = new ColorThief();

// $("img").hover(function() {
//     const image = $(this)[0];
//     const color = colorThief.getColor(image);
//     console.log(`got image! --> ${$(this).attr("src")}`);
//     console.log(color);
//     color.push(0.15);
//     $("body").css("background-color", "rgba(" + color + ")");
// });

// // Make sure image is finished loading
// if (img.complete) {
//   colorThief.getColor(img);
// } else {
//   image.addEventListener("load", function() {
//     colorThief.getColor(img);
//   });
// }

const gallery = [];
const ena_assets = {
    "design/book-covers": [
        {file: "book.02.jpeg", thumb: "book.02.jpg"},
        {file: "ds копия.jpg", thumb: "ds копия.jpg"},
        {file: "liam.jpg", thumb: "liam.jpg"},
        {file: "book.03.jpeg", thumb: "book.03.jpg"},
        {file: "book.01.jpeg", thumb: "book.01.jpg"},
        // {file: "jc.jpg", thumb: "jc.jpg"},
    ],
    "design/illustrative-logos": [
        {file: "gt3.jpg", thumb: "gt3.jpg"},
        {file: "jst2.jpg", thumb: "jst2.jpg"},
        {file: "pch8.jpg", thumb: "pch8.jpg"},
        {file: "zoo.jpg", thumb: "zoo.jpg"},
        {file: "bj8.jpg", thumb: "bj8.jpg"},
        {file: "sps6.jpg", thumb: "sps6.jpg"},
        {file: "ssf2.jpg", thumb: "ssf2.jpg"},
        // {file: "urt.jpg", thumb: "urt.jpg"},
        // {file: "moray3.jpg", thumb: "moray3.jpg"},
        // {file: "hpa2.jpg", thumb: "hpa2.jpg"},
        {file: "hw2.jpg", thumb: "hw2.jpg"},
        {file: "ab2.jpg", thumb: "ab2.jpg"},
        {file: "hos12.jpg", thumb: "hos12.jpg"},
        {file: "ba9.jpg", thumb: "ba9.jpg"},
        {file: "ssc.jpg", thumb: "ssc.jpg"},
        {file: "bl3.jpg", thumb: "bl3.jpg"},
        {file: "nmt.png", thumb: "nmt.jpg"},
        {file: "fab3.jpg", thumb: "fab3.jpg"},
        {file: "bnb2.jpg", thumb: "bnb2.jpg"},
        {file: "rwl.jpg", thumb: "rwl.jpg"},
        {file: "dh.png", thumb: "dh.jpg"},
        {file: "es2.jpg", thumb: "es2.jpg"},
        // {file: "ddd.jpg", thumb: "ddd.jpg"},
        {file: "tor5.jpg", thumb: "tor5.jpg"},
        {file: "gt.jpg", thumb: "gt.jpg"},
        {file: "sdn.jpg", thumb: "sdn.jpg"},
        {file: "ldp2.jpg", thumb: "ldp2.jpg"},
        {file: "rjg3.jpg", thumb: "rjg3.jpg"},
        {file: "gd4.png", thumb: "gd4.jpg"},
        {file: "krt3.jpg", thumb: "krt3.jpg"},
        {file: "eep.jpg", thumb: "eep.jpg"},
        {file: "mf8.jpg", thumb: "mf8.jpg"},
        {file: "gwa.jpg", thumb: "gwa.jpg"},
        {file: "oki.jpg", thumb: "oki.jpg"},
        {file: "ghb5.jpg", thumb: "ghb5.jpg"},
    ],
    "design/lettering": [
        {file: "cf9.jpg", thumb: "cf9.jpg"},
        {file: "bot.jpg", thumb: "bot.jpg"},
        {file: "spn2.jpg", thumb: "spn2.jpg"},
        {file: "ro3.jpg", thumb: "ro3.jpg"},
        {file: "lr2.jpg", thumb: "lr2.jpg"},
        {file: "bml6.jpg", thumb: "bml6.jpg"},
        {file: "fbc.jpg", thumb: "fbc.jpg"},
        {file: "spsa6.jpg", thumb: "spsa6.jpg"},
        {file: "vw3.jpg", thumb: "vw3.jpg"},
        {file: "zf2.jpg", thumb: "zf2.jpg"},
        {file: "kif12.jpg", thumb: "kif12.jpg"},
        {file: "ro.jpg", thumb: "ro.jpg"},
        {file: "grt2.jpg", thumb: "grt2.jpg"},
        {file: "aow.jpg", thumb: "aow.jpg"},
        {file: "fopo2.jpg", thumb: "fopo2.jpg"},
        {file: "ot.jpg", thumb: "ot.jpg"},
        {file: "wbs4.jpg", thumb: "wbs4.jpg"},
        {file: "cfg3.jpg", thumb: "cfg3.jpg"},
        {file: "br.jpg", thumb: "br.jpg"},
        {file: "lp7.jpg", thumb: "lp7.jpg"},
        {file: "pr.jpg", thumb: "pr.jpg"},
        {file: "hv2.jpg", thumb: "hv2.jpg"},
    ],
    "design/emblem-logos": [
        // {file:"ssa4.jpg", thumb: "ssa4.jpg"},
        {file:"50b2.jpg", thumb: "50b2.jpg"},
        {file:"lp3.jpg", thumb: "lp3.jpg"},
        {file:"lsa3.jpg", thumb: "lsa3.jpg"},
        {file:"gs2.jpg", thumb: "gs2.jpg"},
        {file:"ktv2.jpg", thumb: "ktv2.jpg"},
        {file:"skc.jpg", thumb: "skc.jpg"},
        {file:"sb2.jpg", thumb: "sb2.jpg"},
        {file:"fdd.jpg", thumb: "fdd.jpg"},
        {file:"bbs.jpg", thumb: "bbs.jpg"},
        {file:"kfr.jpg", thumb: "kfr.jpg"},
        {file:"irp3.jpg", thumb: "irp3.jpg"},
        {file:"zb2.jpg", thumb: "zb2.jpg"},
        // {file:"gdw5.jpg", thumb: "gdw5.jpg"},
        {file:"fsp2.jpg", thumb: "fsp2.jpg"},
        // {file:"wwk.jpg", thumb: "wwk.jpg"},
        {file:"wj5.jpg", thumb: "wj5.jpg"},
        {file:"sgf5.jpg", thumb: "sgf5.jpg"},
        {file:"mbu10.jpg", thumb: "mbu10.jpg"},
        {file:"logo_bg.jpg", thumb: "logo_bg.jpg"},
        {file:"rw3.jpg", thumb: "rw3.jpg"},
        {file:"ht2.jpg", thumb: "ht2.jpg"},
        {file:"wbs.jpg", thumb: "wbs.jpg"},
        {file:"bj3.jpg", thumb: "bj3.jpg"},
        {file:"uo3.jpg", thumb: "uo3.jpg"},
        {file:"crc4.jpg", thumb: "crc4.jpg"},
    ],
    "design/layout": [
        {file: "magazine1.jpg", thumb: "magazine1.jpg"},
        {file: "magazine22.jpg", thumb: "magazine22.jpg"},
        {file: "mag_view1.jpg", thumb: "mag_view1.jpg"},
        {file: "Mockup1.jpg", thumb: "Mockup1.jpg"},
        {file: "Mockup2.jpg", thumb: "Mockup2.jpg"},
        {file: "Mockup3.jpg", thumb: "Mockup3.jpg"},
    ],
    "design/minimalist-logos": [
        {file: "143.jpg", thumb: "143.jpg"},
        {file: "int.jpg", thumb: "int.jpg"},
        {file: "tcl.jpg", thumb: "tcl.jpg"},
        {file: "fc2.jpg", thumb: "fc2.jpg"},
        {file: "path-2.jpg", thumb: "path-2.jpg"},
        {file: "iw.jpg", thumb: "iw.jpg"},
        {file: "aiq2.jpg", thumb: "aiq2.jpg"},
        {file: "adv.jpg", thumb: "adv.jpg"},
        {file: "sf.jpg", thumb: "sf.jpg"},
        {file: "rev2.jpg", thumb: "rev2.jpg"},
        {file: "prvs2.jpg", thumb: "prvs2.jpg"},
        {file: "vt2.jpg", thumb: "vt2.jpg"},
        {file: "ntm.jpg", thumb: "ntm.jpg"},
        {file: "zil_r.jpg", thumb: "zil_r.jpg"},
        {file: "fwk.jpg", thumb: "fwk.jpg"},
        {file: "mbu8.jpg", thumb: "mbu8.jpg"},
        {file: "ramen.jpg", thumb: "ramen.jpg"},
        {file: "sh.jpg", thumb: "sh.jpg"},
        {file: "hh2.jpg", thumb: "hh2.jpg"},
        {file: "nlp2.jpg", thumb: "nlp2.jpg"},
        {file: "pfl6.jpg", thumb: "pfl6.jpg"},
        {file: "pa2.jpg", thumb: "pa2.jpg"},
        {file: "cp3.jpg", thumb: "cp3.jpg"},
        {file: "in.jpg", thumb: "in.jpg"},
        {file: "as5.jpg", thumb: "as5.jpg"}
    ],
    "design/packaging": [
        {file: "cards7.jpg", thumb: "cards7.jpg"},
        {file: "bot.jpg", thumb: "bot.jpg"},
        {file: "beer.png", thumb: "beer.jpg"},
        {file: "jv.jpg", thumb: "jv.jpg"},
        {file: "bsj.png", thumb: "bsj.jpg"},
        {file: "wipe3.jpg", thumb: "wipe3.jpg"},
        {file: "mask.jpg", thumb: "mask.jpg"},
        {file: "tree11.jpg", thumb: "tree11.jpg"},
        {file: "nespresso3.jpg", thumb: "nespresso3.jpg"},
        {file: "pf2.jpg", thumb: "pf2.jpg"},
        {file: "gs.jpg", thumb: "gs.jpg"},
        {file: "box3plan.jpg", thumb: "box3plan.jpg"},
        {file: "nespresso1.jpg", thumb: "nespresso1.jpg"},
        {file: "nespresso2.jpg", thumb: "nespresso2.jpg"},
        {file: "hca6.jpg", thumb: "hca6.jpg"},
        {file: "cheese2.jpg", thumb: "cheese2.jpg"},
        {file: "box2.jpg", thumb: "box2.jpg"},
        {file: "lk2.jpg", thumb: "lk2.jpg"},
        {file: "cf11.jpg", thumb: "cf11.jpg"},
        {file: "cascara2.jpg", thumb: "cascara2.jpg"},
        {file: "cards6.jpg", thumb: "cards6.jpg"},
    ],
    // "design/apparel": [
    //     {file: "defi9.jpg", thumb: "defi9.jpg"},
    //     {file: "defi17.jpg", thumb: "defi17.jpg"},
    //     {file: "cof2.jpg", thumb: "cof2.jpg"},
    //     {file: "eagle.jpg", thumb: "eagle.jpg"},
    //     {file: "cof.jpg", thumb: "cof.jpg"},
    //     {file: "tf2.jpg", thumb: "tf2.jpg"},
    //     {file: "hotrod2.jpg", thumb: "hotrod2.jpg"},
    //     {file: "skeleton.jpg", thumb: "skeleton.jpg"},
    //     {file: "hotrod.jpg", thumb: "hotrod.jpg"},
    // ],
    "illustrations": [
        {file: "Untitled_Artwork.03.png", thumb: "Untitled_Artwork.03.jpg"},
        {file: "Lucio_x_Elaine.png", thumb: "Lucio_x_Elaine.jpg"},
        {file: "Untitled_Artwork.01.png", thumb: "Untitled_Artwork.01.jpg"},
        {file: "Untitled_Artwork.05.png", thumb: "Untitled_Artwork.05.jpg"},
        {file: "Untitled_Artwork.04.png", thumb: "Untitled_Artwork.04.jpg"},
        {file: "Untitled_Artwork.02.png", thumb: "Untitled_Artwork.02.jpg"},
        {file: "Quick.png", thumb: "Quick.jpg"},
    ],
    "posters": [
        {file: "poster.05.jpeg", thumb: "poster.05.jpg"},
        {file: "poster.08.jpeg", thumb: "poster.08.jpg"},
        {file: "1.jpg", thumb: "1.jpg"},
        {file: "5.jpg", thumb: "5.jpg"},
        {file: "poster.09.jpeg", thumb: "poster.09.jpg"},
        {file: "22.png", thumb: "22.jpg"},
        {file: "3.jpg", thumb: "3.jpg"},
        {file: "6.jpg", thumb: "6.jpg"},
        {file: "2.jpg", thumb: "2.jpg"},
        {file: "4.jpg", thumb: "4.jpg"},
        {file: "poster.03.jpeg", thumb: "poster.03.jpg"},
        {file: "poster.07.jpeg", thumb: "poster.07.jpg"},
        {file: "poster.01.jpeg", thumb: "poster.01.jpg"},
        {file: "poster.04.jpeg", thumb: "poster.04.jpg"},
        {file: "poster.02.jpeg", thumb: "poster.02.jpg"},
        {file: "poster.06.jpeg", thumb: "poster.06.jpg"},
        {file: "och.png", thumb: "och.jpg"},
    ],
    "websites": [
        {file: "asmi_web.jpg", thumb: "asmi_web.jpg"},
        {file: "diamond_web.jpg", thumb: "diamond_web.jpg"},
        {file: "tantan_web.jpg", thumb: "tantan_web.jpg"},
        {file: "thai_web.jpg", thumb: "thai_web.jpg"}
    ],
    "laventana": [
        {file: "IMG_7154.jpg", thumb: "IMG_7154.jpg"},
        {file: "IMG_7670.jpg", thumb: "IMG_7670.jpg"},
        {file: "IMG_7671.jpg", thumb: "IMG_7671.jpg"},
        {file: "IMG_7672.jpg", thumb: "IMG_7672.jpg"},
        {file: "IMG_7673.jpg", thumb: "IMG_7673.jpg"},
        {file: "IMG_7674.jpg", thumb: "IMG_7674.jpg"},
        {file: "IMG_7675.jpg", thumb: "IMG_7675.jpg"},
        {file: "IMG_7676.jpg", thumb: "IMG_7676.jpg"}
    ]
};

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

for (category in ena_assets) {
    ena_assets[category].forEach(path => {
        gallery.push({category: category, file: path.file, thumb: path.thumb});
    });
}

// shuffleArray(gallery);
/* gallery items */
gallery.forEach(o => {
    $(".grid").append(`
        <div class="grid-item" data-type="${o.category}">
            <a class="glightbox" href="assets/${o.category}/${o.file}">
                <img class="thumb" src="assets/${o.category}/thumbs/${o.thumb}" loading="lazy">
            </a>
        </div>`);
});

/* about */
const urlParams = new URLSearchParams(window.location.search);
let profile = "profile.01.jpg";
if(urlParams.has("reality1")) {
    profile = "troll.jpg";
}
if(urlParams.has("reality2")) {
    profile = "besties.jpg";
}
$(".grid").append(`
<div class="grid-item about" data-type="about">
<div class="container">
<div class="row">
    <div class="col">
        <h2>Anastasia Rayner</h2>
        <p>Graphic designer and illustrator based out of Saint Petersburg</p>
        <p>Currently freelancing for 99designs</p>
        <p>Bachelor of Arts in Graphic Design / Saint-Petersburg State University</p>
        <div class="social-btns">
            <i class="fa-brands fa-xl fa-instagram"></i>&nbsp;
            <i class="fa-brands fa-xl fa-facebook"></i>&nbsp;
            <i class="fa-brands fa-xl fa-linkedin"></i>
        </div>
    </div>
    <div class="col">
        <img class="profile-thumb" src="assets/about/${profile}" loading="lazy">
    </div>
</div>
</div>

</div>`);

let lightbox;
let $grid;

// // init Masonry
const masonry_cfg = {
    itemSelector: ".grid-item",
    percentPosition: true,
    columnWidth: ".grid-sizer",
    stagger: 30
    // gutter: 4
};

const isotope_cfg = {
  itemSelector: ".grid-item",
  percentPosition: true,
  sortBy: "original-order",
  masonry: masonry_cfg
}

const gallery_navigate = filter => {
    $grid.isotope({filter: filter});
    setTimeout(() => {
        $grid.isotope("layout");
        window.scrollTo(0, 0);
        lightbox.reload();
    }, 500);
};

$(".navbar-brand").click(function(event) {
    gallery_navigate("*");
});

$(".nav-link").click(function(event) {
    event.preventDefault();
    const href = $(this).attr("href");
    gallery_navigate(`[data-type="${href}"]`);
});

const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = $("#navbarResponsive");
navLinks.forEach((l) => {
    l.addEventListener("click", () => {
        const bsCollapse = new bootstrap.Collapse(menuToggle);
        bsCollapse.toggle();
    })
});

document.addEventListener("DOMContentLoaded", function(){
    lightbox = GLightbox();
    $grid = $(".grid").isotope(isotope_cfg);
    // layout Isotope after each image loads
    $grid.imagesLoaded().progress(() => {
        $grid.isotope("layout");
        lightbox.reload();
    });

    $grid.on('arrangeComplete', function(event, filteredItems) {
        $(".grid-item:hidden a").removeClass("glightbox");
        $(".grid-item:visible a").addClass("glightbox");
        lightbox.reload();
    });

    if(urlParams.has("laventana")) {
        console.log("laventana!!!");
        gallery_navigate(`[data-type="laventana"]`);
    }
});
