document.addEventListener("DOMContentLoaded", function() {
    const photos = [
        "Picture/Fubuki (1).png",
        "Picture/Fubuki (2).png",
        "Picture/Fubuki (3).png",
        "Picture/Fubuki (4).png",
        "Picture/Fubuki (5).png",
        "Picture/Fubuki (6).png",
        "Picture/Fubuki (7).png",
        "Picture/Fubuki (10).png",
        "Picture/Fubuki (11).png",
        "Picture/Fubuki (12).png",
        "Picture/Fubuki (13).png",
        "Picture/Fubuki (14).png",
        "Picture/Fubuki (15).png",
        "Picture/Fubuki (16).png",
        "Picture/Fubuki (17).png",
        "Picture/Fubuki (18).png",
        "Picture/Fubuki (19).png",
        "Picture/Fubuki (20).png",
        "Picture/Fubuki (21).png",
        "Picture/Fubuki (22).png",
        "Picture/Fubuki (23).png",
        "Picture/Fubuki (24).png",
        "Picture/Fubuki (25).png",
        "Picture/Fubuki (26).png",
        "Picture/Fubuki (27).png",
        "Picture/Fubuki (28).png",
        "Picture/Fubuki (44).png",
        "Picture/Fubuki (45).png",
        "Picture/Fubuki (46).png",
        "Picture/Fubuki (47).png",
        "Picture/Fubuki (48).png",
        "Picture/Fubuki (49).png",
        "Picture/Fubuki (50).png",
        "Picture/Fubuki (51).png",
        "Picture/Fubuki (52).png",
        "Picture/Fubuki (53).png",
        "Picture/Fubuki (54).png",
        "Picture/Fubuki (55).png",
        "Picture/Fubuki (56).png",
        "Picture/Fubuki (57).png",
        "Picture/Fubuki (58).png",
        "Picture/Fubuki (59).png",
        "Picture/Fubuki (60).png",
        "Picture/Fubuki (61).png",
        "Picture/Fubuki (62).png",
        "Picture/Fubuki (63).png",
        "Picture/Fubuki (64).png",
        "Picture/Fubuki (65).png",
        "Picture/Fubuki (66).png",
        "Picture/Fubuki (67).png",
        "Picture/Fubuki (68).png",
        "Picture/Fubuki (69).png",
        "Picture/Fubuki (70).png",
        "Picture/Fubuki (71).png",
        "Picture/Fubuki (72).png",
        "Picture/Guizhong (1).png",
        "Picture/Guizhong (2).png",
        "Picture/Guizhong (3).png",
        "Picture/Guizhong (4).png",
        "Picture/Guizhong (5).png",
        "Picture/Guizhong (6).png",
        "Picture/Guizhong (7).png",
        "Picture/Guizhong (8).png",
        "Picture/Guizhong (9).png",
        "Picture/Guizhong (10).png",
        "Picture/Guizhong (11).png",
        "Picture/Guizhong (12).png",
        "Picture/Guizhong (13).png",
        "Picture/Guizhong (14).png",
        "Picture/Guizhong (15).png",
        "Picture/Guizhong (16).png",
        "Picture/Guizhong (17).png",
        "Picture/Guizhong (18).png",
        "Picture/Guizhong (19).png",
        "Picture/Guizhong (20).png",
        "Picture/Guizhong (21).png",
        "Picture/Guizhong (22).png",
        "Picture/Guizhong (23).png",
        "Picture/Guizhong (24).png",
        "Picture/Guizhong (25).png",
        "Picture/Guizhong (26).png",
        "Picture/Guizhong (27).png",
        "Picture/Guizhong (28).png",
        "Picture/Guizhong (29).png",
        "Picture/Guizhong (30).png",
        "Picture/Guizhong (31).png",
        "Picture/Guizhong (32).png",
        "Picture/Guizhong (33).png",
        "Picture/Guizhong (34).png",
        "Picture/Guizhong (35).png",
        "Picture/Guizhong (36).png",
        "Picture/Guizhong (37).png",
        "Picture/Guizhong (38).png",
        "Picture/Guizhong (39).png",
        "Picture/Guizhong (40).png",
        "Picture/Guizhong (41).png",
        "Picture/Guizhong (42).png",
        "Picture/Guizhong (43).png",
        "Picture/Guizhong (44).png",
        "Picture/Guizhong (45).png",
        "Picture/Guizhong (46).png",
        "Picture/Guizhong (47).png",
        "Picture/Guizhong (48).png",
        "Picture/Guizhong (49).png",
        "Picture/Guizhong (50).png",
        "Picture/Guizhong (51).png",
        "Picture/Guizhong (52).png",
        "Picture/Guizhong (53).png",
        "Picture/Guizhong (54).png",
        "Picture/Guizhong (55).png",
        "Picture/Guizhong (56).png",
        "Picture/Guizhong (57).png",
        "Picture/Guizhong (58).png",
        "Picture/Guizhong (59).png",
        "Picture/Guizhong (60).png",
        "Picture/Guizhong (61).png",
        "Picture/Guizhong (62).png",
        "Picture/Guizhong (63).png",
        "Picture/Guizhong (64).png",
        "Picture/Guizhong (65).png",
        "Picture/Guizhong (66).png",
        "Picture/Guizhong (67).png",
        "Picture/Guizhong (68).png",
        "Picture/Guizhong (69).png",
        "Picture/Guizhong (70).png",
        "Picture/Guizhong (71).png",
        "Picture/Guizhong (72).png",
        "Picture/Guizhong (73).png",
        "Picture/Guizhong (74).png",
        "Picture/Guizhong (75).png",
        "Picture/Guizhong (76).png",
        "Picture/Guizhong (77).png",
        "Picture/Guizhong (78).png",
        "Picture/Guizhong (79).png",
        "Picture/Guizhong (80).png",
        "Picture/topaz (1)",
"Picture/topaz (2)",
"Picture/topaz (3)",
"Picture/topaz (4)",
"Picture/topaz (5)",
"Picture/topaz (6)",
"Picture/topaz (7)",
"Picture/topaz (8)",
"Picture/topaz (9)",
"Picture/topaz (10)",
"Picture/topaz (11)",
"Picture/topaz (12)",
"Picture/topaz (13)",
"Picture/topaz (14)",
"Picture/topaz (15)",
"Picture/topaz (16)",
"Picture/topaz (17)",
"Picture/topaz (18)",
"Picture/topaz (19)",
"Picture/topaz (20)",
"Picture/topaz (21)",
"Picture/topaz (22)",
"Picture/topaz (23)",
"Picture/topaz (24)",
"Picture/topaz (25)",
"Picture/topaz (26)",
"Picture/topaz (27)",
"Picture/topaz (28)",
"Picture/topaz (29)",
"Picture/topaz (30)",
"Picture/topaz (31)",
"Picture/topaz (32)",
"Picture/topaz (33)",
"Picture/topaz (34)",
"Picture/topaz (35)",
"Picture/topaz (36)",
"Picture/topaz (37)",
"Picture/topaz (38)",
"Picture/topaz (39)",
"Picture/topaz (40)",
"Picture/topaz (41)",
"Picture/topaz (42)",
"Picture/topaz (43)",
"Picture/topaz (44)",
"Picture/topaz (45)",
"Picture/topaz (46)",
"Picture/topaz (47)",
"Picture/topaz (48)",
"Picture/topaz (49)",
"Picture/topaz (50)",
"Picture/topaz (51)",
"Picture/topaz (52)",
"Picture/topaz (53)",
"Picture/topaz (54)",
"Picture/topaz (55)",
"Picture/topaz (56)",
"Picture/topaz (57)",
"Picture/topaz (58)",
"Picture/topaz (59)",
"Picture/topaz (60)",
"Picture/topaz (61)",
"Picture/topaz (62)",
"Picture/topaz (63)",
"Picture/topaz (64)",
"Picture/topaz (65)",
"Picture/topaz (66)",
"Picture/topaz (67)",
"Picture/topaz (68)",
"Picture/topaz (69)",
"Picture/topaz (70)",
"Picture/topaz (71)",
"Picture/topaz (72)",
"Picture/topaz (73)",
"Picture/topaz (74)",
"Picture/topaz (75)",
"Picture/topaz (76)",
"Picture/topaz (77)",
"Picture/topaz (78)",
"Picture/topaz (79)",
"Picture/topaz (80)",
"Picture/topaz (81)",
"Picture/topaz (82)",
"Picture/topaz (83)",
"Picture/topaz (84)",
"Picture/topaz (85)",
"Picture/topaz (86)",
"Picture/topaz (87)",
"Picture/topaz (88)",
"Picture/topaz (89)",
"Picture/topaz (90)",
"Picture/topaz (91)",
"Picture/topaz (92)",
"Picture/topaz (93)",
"Picture/topaz (94)",
"Picture/topaz (95)",
"Picture/topaz (96)",
"Picture/topaz (97)",
"Picture/topaz (98)",
"Picture/topaz (99)",
"Picture/topaz (100)",
"Picture/topaz (101)",
"Picture/topaz (102)",
"Picture/topaz (103)",
"Picture/topaz (104)",
"Picture/topaz (105)",
"Picture/topaz (106)",
"Picture/topaz (107)",
    ];//Danh sách các URL hình ảnh

    const videos = [
        ""
        // (Danh sách các URL video)
    ];

    const itemsPerPage = 40;
    let currentPhotoPage = 1;
    let currentVideoPage = 1;
    let currentIndex = 0;
    let currentItems = [];

    function showPhotos(page) {
        currentIndex = 0; // Đặt lại chỉ mục khi chuyển trang
        const gallery = document.getElementById("photo-gallery");
        gallery.innerHTML = "";
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        currentItems = photos.slice(start, end);

        currentItems.forEach((src, index) => {
            const div = document.createElement("div");
            div.className = "gallery-item";
            const img = document.createElement("img");
            img.src = src;
            div.appendChild(img);
            gallery.appendChild(div);

            img.addEventListener("click", function() {
                currentIndex = index;
                showFullImage(src);
            });
        });

        document.getElementById("prevPage").disabled = page === 1;
        document.getElementById("nextPage").disabled = end >= photos.length;
    }

    function showVideos(page) {
        currentIndex = 0; // Đặt lại chỉ mục khi chuyển trang
        const gallery = document.getElementById("video-gallery");
        gallery.innerHTML = "";
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        currentItems = videos.slice(start, end);

        currentItems.forEach((src, index) => {
            const div = document.createElement("div");
            div.className = "gallery-item";
            const video = document.createElement("video");
            video.controls = true;
            const source = document.createElement("source");
            source.src = src;
            source.type = "video/mp4";
            video.appendChild(source);
            div.appendChild(video);
            gallery.appendChild(div);

            video.addEventListener("click", function() {
                currentIndex = index;
                showFullVideo(src);
            });
        });

        document.getElementById("prevVideoPage").disabled = page === 1;
        document.getElementById("nextVideoPage").disabled = end >= videos.length;
    }

    function showFullImage(src) {
        const fullImgContainer = document.getElementById("full-img");
        const fullImg = document.getElementById("full-img-src");
        fullImg.src = src;
        fullImgContainer.style.display = "flex";
        fullImg.style.display = "block";
        document.getElementById("full-video-src").style.display = "none";
    }

    function showFullVideo(src) {
        const fullImgContainer = document.getElementById("full-img");
        const fullVideo = document.getElementById("full-video-src");
        fullVideo.src = src;
        fullVideo.style.display = "block";
        fullVideo.play();
        fullImgContainer.style.display = "flex";
        document.getElementById("full-img-src").style.display = "none";
    }

    function navigate(direction) {
        currentIndex += direction;
        if (currentIndex < 0) {
            currentIndex = currentItems.length - 1;
        } else if (currentIndex >= currentItems.length) {
            currentIndex = 0;
        }
        const currentSrc = currentItems[currentIndex];
        if (currentSrc.endsWith(".mp4")) {
            showFullVideo(currentSrc);
        } else {
            showFullImage(currentSrc);
        }
    }

    document.getElementById("prevFull").addEventListener("click", function() {
        navigate(-1);
    });

    document.getElementById("nextFull").addEventListener("click", function() {
        navigate(1);
    });

    const closeBtn = document.getElementById("close");
    closeBtn.addEventListener("click", function() {
        const fullImgContainer = document.getElementById("full-img");
        fullImgContainer.style.display = "none";
        const fullVideo = document.getElementById("full-video-src");
        fullVideo.pause();
        fullVideo.src = ""; // Clear the video source to stop loading
    });

    if (document.getElementById("photo-gallery")) {
        showPhotos(currentPhotoPage);
        document.getElementById("prevPage").addEventListener("click", function() {
            if (currentPhotoPage > 1) {
                currentPhotoPage--;
                showPhotos(currentPhotoPage);
            }
        });
        document.getElementById("nextPage").addEventListener("click", function() {
            if ((currentPhotoPage * itemsPerPage) < photos.length) {
                currentPhotoPage++;
                showPhotos(currentPhotoPage);
            }
        });
    }

    if (document.getElementById("video-gallery")) {
        showVideos(currentVideoPage);
        document.getElementById("prevVideoPage").addEventListener("click", function() {
            if (currentVideoPage > 1) {
                currentVideoPage--;
                showVideos(currentVideoPage);
            }
        });
        document.getElementById("nextVideoPage").addEventListener("click", function() {
            if ((currentVideoPage * itemsPerPage) < videos.length) {
                currentVideoPage++;
                showVideos(currentVideoPage);
            }
        });
    }

    // Lắng nghe sự kiện phím
    document.addEventListener("keydown", function(event) {
        console.log(event.key); // Để kiểm tra các phím được nhấn
        if (document.getElementById("full-img").style.display === "flex") {
            if (event.key === "ArrowLeft") {
                console.log("ArrowLeft pressed");
                navigate(-1);
            } else if (event.key === "ArrowRight") {
                console.log("ArrowRight pressed");
                navigate(1);
            } else if (event.key === "Escape") {
                console.log("Escape pressed");
                const fullImgContainer = document.getElementById("full-img");
                fullImgContainer.style.display = "none";
                const fullVideo = document.getElementById("full-video-src");
                fullVideo.pause();
                fullVideo.src = ""; // Clear the video source to stop loading
            }
        }
    });
});
