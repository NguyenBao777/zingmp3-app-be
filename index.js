const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const corsOptions = {
	origin: "*",
	credentials: true, //access-control-allow-credentials:true
	optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.json());
const path = require("path");
app.use("/public", express.static(path.join(__dirname, "./public")));

// const webRoute = require("./routes/web");
// app.use("/", webRoute);
// deployed server on vercel
app.get("/", (req, res) => {
	return res.status(200).send({ message: "server zingmp3-app" });
});

app.post("/user/addnew", async (req, res) => {
	return res.status(200).send({ success: true, message: "Successfully" });
});
app.put("/user/edit", async (req, res) => {
	return res.status(200).send({ success: true, message: "Successfully" });
});
app.get("/user/login/:username/:password", async (req, res) => {
	const data = {
		id: 5,
		user_username: "sontungmtp",
		user_password: "a8c2825b5806f00cf13e296a3527ca1d",
		user_name: "Sơn Tùng MTP",
		user_birthday: "1994-07-05",
		user_country: "Việt Nam",
		user_desc:
			'Sơn Tùng M-TP, là một nam ca sĩ kiêm sáng tác nhạc, rapper và diễn viên người Việt Nam.\r\n\r\nSinh ra ở thành phố Thái Bình, thời thơ ấu, Sơn Tùng thường đi hát ở Cung văn hoá thiếu nhi tỉnh Thái Bình và học chơi đàn organ. Sau đó, Tùng cùng với các bạn trong lớp thành lập nên một nhóm nhạc, lấy tên là Over Band, bắt đầu sáng tác và đăng tải các bài hát của mình lên một trang web chuyên về lĩnh vực âm nhạc có tên là LadyKillah. Tùng bắt đầu nổi tiếng khi phát hành hai đĩa đơn "Cơn mưa ngang qua" và "Em của ngày hôm qua", đánh dấu mốc khởi đầu cho sự nghiệp của mình. Album đầu tiên trong sự nghiệp của anh là album nhạc phim Chàng trai năm ấy OST được phát hành vào năm 2014, bao gồm hai đĩa đơn là "Chắc ai đó sẽ về" và "Không phải dạng vừa đâu" đạt được những thành công lớn về mặt thương mại. Vào năm 2017, Sơn Tùng M-TP được sự công nhận thiện chí hơn từ cộng đồng mạng sau khi phát hành hai đĩa đơn nằm trong album tuyển tập đầu tiên, m-tp M-TP (2017), là "Lạc trôi" và "Nơi này có anh". Sơn Tùng M-TP ra mắt album tuyển tập m-tp M-TP vào cùng năm. Hai đĩa đơn "Chạy ngay đi" (2018), "Hãy trao cho anh" (2019) hợp tác cùng rapper người Mỹ Snoop Dogg gây tiếng vang và lập nhiều kỷ lục, được truyền thông quốc tế đánh giá cao.\r\n\r\nSơn Tùng đã có hơn bốn năm gắn bó với các hãng thu âm Văn Production và WePro Entertainment trước khi thành lập hãng thu âm M-TP Entertainment của mình vào cuối năm 2016. Sơn Tùng M-TP khởi động chuyến lưu diễn hòa nhạc đầu tiên, mang tên M-TP Ambition – Chuyến bay đầu tiên, vào cuối năm 2015 và kết thúc vào đầu năm 2016. Tùng đóng vai chính trong bộ phim chiếu rạp năm 2014 Chàng trai năm ấy và nhận được một giải Cánh diều vàng ở hạng mục Diễn viên trẻ triển vọng cho vai diễn của mình. Năm 2015, Tùng xuất hiện với vai trò thí sinh trong chương trình âm nhạc Hòa âm Ánh sáng. Vào tháng 7 năm 2018, đạo diễn Nguyễn Quang Dũng cùng Biti\'s Hunter hợp tác ra mắt bộ phim ngắn Chuyến đi của thanh xuân với Sơn Tùng M-TP đảm nhận một vai khách mời. Bộ phim tài liệu đầu tiên của Sơn Tùng, Sky Tour ra mắt năm 2020, kể lại quá trình sản xuất và thực hiện chuyến lưu diễn cùng tên.\r\n\r\nĐược mệnh danh là "Hoàng tử V-pop", nhiều nhà báo âm nhạc, nhà lý luận phê bình và tác giả xem anh là một trong những nghệ sĩ V-pop thành công nhất ở thời điểm hiện tại. Trong suốt sự nghiệp của mình, Tùng nhận được nhiều giải thưởng trong nước và quốc tế, bao gồm một giải thưởng Âm nhạc Cống hiến, một giải Âm nhạc châu Âu của MTV, một giải Mnet Asian Music Awards, bảy giải Làn Sóng Xanh và được xếp vào danh sách 30 Under 30 của tạp chí Forbes Vietnam. Sơn Tùng M-TP hiện đang là nghệ sĩ Việt Nam duy nhất lọt vào ba bảng xếp hạng chính thức thuộc tạp chí Billboard, bao gồm vị trí thứ 28 trên Billboard Social 50, vị trí thứ 126 trên Billboard Global Excl. U.S. và hai lần giành vị trí quán quân trên Billboard LyricFind Global Chart. Album nhạc phim thứ hai của Sơn Tùng, Sky Tour (Original Motion Picture Soundtrack) phát hành vào năm 2020 đạt vị trí thứ 83 trên bảng xếp hạng iTunes toàn cầu.',
		user_role: "artist",
		user_avatar: "user_sÆ¡n tÃ¹ng.webp_1668845538492.webp",
		created_at: "2022-11-14",
		updated_at: "2022-11-19",
	};
	return res.status(200).send({ success: true, message: data });
});
app.get("/user/getone/:id", async (req, res) => {
	const data = {
		id: 4,
		user_username: "Phoenix",
		user_password: "a8c2825b5806f00cf13e296a3527ca1d",
		user_name: "Binz",
		user_birthday: "1988-05-24",
		user_country: "Việt Nam",
		user_desc:
			"Lê Nguyễn Trung Đan, thường được biết đến với nghệ danh Binz hay Binz Da Poet, là một nam rapper, nhạc sĩ người Mỹ gốc Việt.",
		user_role: "artist",
		user_avatar: "user_binz.jpg_1667709735001.jpeg",
		created_at: "2022-10-16",
		updated_at: "2022-11-06",
	};
	return res.status(200).send({ success: true, message: data });
});
app.get("/user/getall", async (req, res) => {
	const data = [
		{
			id: 4,
			user_username: "Phoenix",
			user_password: "a8c2825b5806f00cf13e296a3527ca1d",
			user_name: "Binz",
			user_birthday: "1988-05-24",
			user_country: "Việt Nam",
			user_desc:
				"Lê Nguyễn Trung Đan, thường được biết đến với nghệ danh Binz hay Binz Da Poet, là một nam rapper, nhạc sĩ người Mỹ gốc Việt.",
			user_role: "artist",
			user_avatar: "user_binz.jpg_1667709735001.jpeg",
			created_at: "2022-10-16",
			updated_at: "2022-11-06",
		},
		{
			id: 5,
			user_username: "sontungmtp",
			user_password: "a8c2825b5806f00cf13e296a3527ca1d",
			user_name: "Sơn Tùng MTP",
			user_birthday: "1994-07-05",
			user_country: "Việt Nam",
			user_desc:
				'Sơn Tùng M-TP, là một nam ca sĩ kiêm sáng tác nhạc, rapper và diễn viên người Việt Nam.\r\n\r\nSinh ra ở thành phố Thái Bình, thời thơ ấu, Sơn Tùng thường đi hát ở Cung văn hoá thiếu nhi tỉnh Thái Bình và học chơi đàn organ. Sau đó, Tùng cùng với các bạn trong lớp thành lập nên một nhóm nhạc, lấy tên là Over Band, bắt đầu sáng tác và đăng tải các bài hát của mình lên một trang web chuyên về lĩnh vực âm nhạc có tên là LadyKillah. Tùng bắt đầu nổi tiếng khi phát hành hai đĩa đơn "Cơn mưa ngang qua" và "Em của ngày hôm qua", đánh dấu mốc khởi đầu cho sự nghiệp của mình. Album đầu tiên trong sự nghiệp của anh là album nhạc phim Chàng trai năm ấy OST được phát hành vào năm 2014, bao gồm hai đĩa đơn là "Chắc ai đó sẽ về" và "Không phải dạng vừa đâu" đạt được những thành công lớn về mặt thương mại. Vào năm 2017, Sơn Tùng M-TP được sự công nhận thiện chí hơn từ cộng đồng mạng sau khi phát hành hai đĩa đơn nằm trong album tuyển tập đầu tiên, m-tp M-TP (2017), là "Lạc trôi" và "Nơi này có anh". Sơn Tùng M-TP ra mắt album tuyển tập m-tp M-TP vào cùng năm. Hai đĩa đơn "Chạy ngay đi" (2018), "Hãy trao cho anh" (2019) hợp tác cùng rapper người Mỹ Snoop Dogg gây tiếng vang và lập nhiều kỷ lục, được truyền thông quốc tế đánh giá cao.\r\n\r\nSơn Tùng đã có hơn bốn năm gắn bó với các hãng thu âm Văn Production và WePro Entertainment trước khi thành lập hãng thu âm M-TP Entertainment của mình vào cuối năm 2016. Sơn Tùng M-TP khởi động chuyến lưu diễn hòa nhạc đầu tiên, mang tên M-TP Ambition – Chuyến bay đầu tiên, vào cuối năm 2015 và kết thúc vào đầu năm 2016. Tùng đóng vai chính trong bộ phim chiếu rạp năm 2014 Chàng trai năm ấy và nhận được một giải Cánh diều vàng ở hạng mục Diễn viên trẻ triển vọng cho vai diễn của mình. Năm 2015, Tùng xuất hiện với vai trò thí sinh trong chương trình âm nhạc Hòa âm Ánh sáng. Vào tháng 7 năm 2018, đạo diễn Nguyễn Quang Dũng cùng Biti\'s Hunter hợp tác ra mắt bộ phim ngắn Chuyến đi của thanh xuân với Sơn Tùng M-TP đảm nhận một vai khách mời. Bộ phim tài liệu đầu tiên của Sơn Tùng, Sky Tour ra mắt năm 2020, kể lại quá trình sản xuất và thực hiện chuyến lưu diễn cùng tên.\r\n\r\nĐược mệnh danh là "Hoàng tử V-pop", nhiều nhà báo âm nhạc, nhà lý luận phê bình và tác giả xem anh là một trong những nghệ sĩ V-pop thành công nhất ở thời điểm hiện tại. Trong suốt sự nghiệp của mình, Tùng nhận được nhiều giải thưởng trong nước và quốc tế, bao gồm một giải thưởng Âm nhạc Cống hiến, một giải Âm nhạc châu Âu của MTV, một giải Mnet Asian Music Awards, bảy giải Làn Sóng Xanh và được xếp vào danh sách 30 Under 30 của tạp chí Forbes Vietnam. Sơn Tùng M-TP hiện đang là nghệ sĩ Việt Nam duy nhất lọt vào ba bảng xếp hạng chính thức thuộc tạp chí Billboard, bao gồm vị trí thứ 28 trên Billboard Social 50, vị trí thứ 126 trên Billboard Global Excl. U.S. và hai lần giành vị trí quán quân trên Billboard LyricFind Global Chart. Album nhạc phim thứ hai của Sơn Tùng, Sky Tour (Original Motion Picture Soundtrack) phát hành vào năm 2020 đạt vị trí thứ 83 trên bảng xếp hạng iTunes toàn cầu.',
			user_role: "artist",
			user_avatar: "user_sÆ¡n tÃ¹ng.webp_1668845538492.webp",
			created_at: "2022-11-14",
			updated_at: "2022-11-19",
		},
		{
			id: 6,
			user_username: "gdragon",
			user_password: "a8c2825b5806f00cf13e296a3527ca1d",
			user_name: "G-Dragon",
			user_birthday: "1988-08-18",
			user_country: "Hàn Quốc",
			user_desc:
				'Kwon Ji-yong (tiếng Hàn: 권지용; Hanja: 權志龍; Hán-Việt: Quyền Chí Long, sinh ngày 18 tháng 8 năm 1988), thường được biết đến với nghệ danh G-Dragon, là một nam rapper, ca sĩ, nhạc sĩ và nhà sản xuất thu âm người Hàn Quốc. Anh được mệnh danh là "Ông hoàng K-pop" G-Dragon được đào tạo trong sáu năm, từ năm 12 tuổi, tại công ty giải trí YG Entertainment trước khi ra mắt vào năm 2006 với tư cách là thủ lĩnh nhóm nhạc Big Bang, một trong những nhóm nhạc nam bán đĩa nhạc chạy nhất thế giới.\r\n\r\nAlbum solo đầu tay của anh Heartbreaker và ca khúc chủ đề cùng tên, phát hành năm 2009, là thành công về mặt thương mại, trở thành album bán chạy nhất của một nghệ sĩ solo Hàn Quốc vào thời điểm đó và giành giải Album của năm tại lễ trao giải thưởng Âm nhạc Châu Á Mnet 2009.',
			user_role: "artist",
			user_avatar: "user_375px-GDragon.jpg_1668918477236.jpeg",
			created_at: "2022-11-20",
			updated_at: "2022-11-20",
		},
	];
	return res.status(200).send({ success: true, message: data });
});
app.get("/user/search/:keywords", async (req, res) => {
	const data = [
		{
			id: 5,
			user_username: "sontungmtp",
			user_password: "a8c2825b5806f00cf13e296a3527ca1d",
			user_name: "Sơn Tùng MTP",
			user_birthday: "1994-07-05",
			user_country: "Việt Nam",
			user_desc:
				'Sơn Tùng M-TP, là một nam ca sĩ kiêm sáng tác nhạc, rapper và diễn viên người Việt Nam.\r\n\r\nSinh ra ở thành phố Thái Bình, thời thơ ấu, Sơn Tùng thường đi hát ở Cung văn hoá thiếu nhi tỉnh Thái Bình và học chơi đàn organ. Sau đó, Tùng cùng với các bạn trong lớp thành lập nên một nhóm nhạc, lấy tên là Over Band, bắt đầu sáng tác và đăng tải các bài hát của mình lên một trang web chuyên về lĩnh vực âm nhạc có tên là LadyKillah. Tùng bắt đầu nổi tiếng khi phát hành hai đĩa đơn "Cơn mưa ngang qua" và "Em của ngày hôm qua", đánh dấu mốc khởi đầu cho sự nghiệp của mình. Album đầu tiên trong sự nghiệp của anh là album nhạc phim Chàng trai năm ấy OST được phát hành vào năm 2014, bao gồm hai đĩa đơn là "Chắc ai đó sẽ về" và "Không phải dạng vừa đâu" đạt được những thành công lớn về mặt thương mại. Vào năm 2017, Sơn Tùng M-TP được sự công nhận thiện chí hơn từ cộng đồng mạng sau khi phát hành hai đĩa đơn nằm trong album tuyển tập đầu tiên, m-tp M-TP (2017), là "Lạc trôi" và "Nơi này có anh". Sơn Tùng M-TP ra mắt album tuyển tập m-tp M-TP vào cùng năm. Hai đĩa đơn "Chạy ngay đi" (2018), "Hãy trao cho anh" (2019) hợp tác cùng rapper người Mỹ Snoop Dogg gây tiếng vang và lập nhiều kỷ lục, được truyền thông quốc tế đánh giá cao.\r\n\r\nSơn Tùng đã có hơn bốn năm gắn bó với các hãng thu âm Văn Production và WePro Entertainment trước khi thành lập hãng thu âm M-TP Entertainment của mình vào cuối năm 2016. Sơn Tùng M-TP khởi động chuyến lưu diễn hòa nhạc đầu tiên, mang tên M-TP Ambition – Chuyến bay đầu tiên, vào cuối năm 2015 và kết thúc vào đầu năm 2016. Tùng đóng vai chính trong bộ phim chiếu rạp năm 2014 Chàng trai năm ấy và nhận được một giải Cánh diều vàng ở hạng mục Diễn viên trẻ triển vọng cho vai diễn của mình. Năm 2015, Tùng xuất hiện với vai trò thí sinh trong chương trình âm nhạc Hòa âm Ánh sáng. Vào tháng 7 năm 2018, đạo diễn Nguyễn Quang Dũng cùng Biti\'s Hunter hợp tác ra mắt bộ phim ngắn Chuyến đi của thanh xuân với Sơn Tùng M-TP đảm nhận một vai khách mời. Bộ phim tài liệu đầu tiên của Sơn Tùng, Sky Tour ra mắt năm 2020, kể lại quá trình sản xuất và thực hiện chuyến lưu diễn cùng tên.\r\n\r\nĐược mệnh danh là "Hoàng tử V-pop", nhiều nhà báo âm nhạc, nhà lý luận phê bình và tác giả xem anh là một trong những nghệ sĩ V-pop thành công nhất ở thời điểm hiện tại. Trong suốt sự nghiệp của mình, Tùng nhận được nhiều giải thưởng trong nước và quốc tế, bao gồm một giải thưởng Âm nhạc Cống hiến, một giải Âm nhạc châu Âu của MTV, một giải Mnet Asian Music Awards, bảy giải Làn Sóng Xanh và được xếp vào danh sách 30 Under 30 của tạp chí Forbes Vietnam. Sơn Tùng M-TP hiện đang là nghệ sĩ Việt Nam duy nhất lọt vào ba bảng xếp hạng chính thức thuộc tạp chí Billboard, bao gồm vị trí thứ 28 trên Billboard Social 50, vị trí thứ 126 trên Billboard Global Excl. U.S. và hai lần giành vị trí quán quân trên Billboard LyricFind Global Chart. Album nhạc phim thứ hai của Sơn Tùng, Sky Tour (Original Motion Picture Soundtrack) phát hành vào năm 2020 đạt vị trí thứ 83 trên bảng xếp hạng iTunes toàn cầu.',
			user_role: "artist",
			user_avatar: "user_sÆ¡n tÃ¹ng.webp_1668845538492.webp",
			created_at: "2022-11-14",
			updated_at: "2022-11-19",
		},
	];
	return res.status(200).send({ success: true, message: data });
});
/********************* songs API: ***************************/
app.post("/song/addnew", async (req, res) => {
	return res.status(200).send({ success: true, message: "Successfully" });
});
app.get("/song/getnew/:pages/:limit", async (req, res) => {
	const pages = Number(req.params.pages);
	let data;
	if (pages <= 1) {
		data = [
			{
				id: 12,
				song_name: "abcdefu",
				song_cover: "song_abcdefu.jpg_1668927866469.jpeg",
				song_path: "song_abcdefu - GAYLE Royal the Serpent.mp3_1668927866469.mpeg",
				song_listened: 1,
				song_lyric:
					"Fuck you and your mom and your sister and your job\r\nAnd your broke-ass car and that shit you call art\r\nFuck you and your friends that I'll never see again\r\nEverybody but your dog, you can all fuck off\r\nI swear I meant to mean the best when it ended\r\nEven tried to bite my tongue when you start shit\r\nNow you're textin' all my friends asking questions\r\nThey never even liked you in the first place\r\nDated a girl that I hate for the attention\r\nShe only made it two days, what a connection\r\nIt's like you'd do anything for my affection\r\nYou're goin' all about it in the worst ways\r\nI was into you, but I'm over it now\r\nAnd I was tryin' to be nice\r\nBut nothing's getting through, so let me spell it out\r\nA-B-C-D-E, F-U\r\nAnd your mom and your sister and your job\r\nAnd your broke-ass car and that shit you call art\r\nFuck you and your friends that I'll never see again\r\nEverybody but your dog, you can all fuck off\r\nNah, nah, nah, nah, nah, nah, nah, nah\r\nA-B-C-D-E, F-U\r\nYou said you just needed space and so I gave it\r\nWhen I had nothin' to say you couldn't take it\r\nTold everyone I'm a bitch, so I became it\r\nAlways had to put yourself above me\r\nI was into you, but I'm over it now\r\nAnd I was tryin' to be nice\r\nBut nothing's getting through, so let me spell it out\r\nA-B-C-D-E, F-U\r\nAnd your mom and your sister and your job\r\nAnd your craigslist couch and the way your voice sounds\r\nFuck you and your friends that I'll never see again\r\nEverybody but your dog, you can all fuck off\r\nNah, nah, nah, nah, nah, nah, nah, nah\r\nA-B-C-D-E, F-U\r\nNah, nah, nah, nah, nah, nah, nah, nah\r\nA-B-C-D-E, F-U\r\nAnd your mom and your sister and your job\r\nAnd your broke-ass car and that shit you call art\r\nFuck you and your friends that I'll never see again\r\nEverybody but your dog, you can all fuck off",
				song_duration: "02:49",
				author_name: "Gayle",
				artist_id: 6,
				artist_name: "Gayle",
				category_id: 3,
				created_at: "2022-11-20",
				updated_at: "2022-11-22",
			},
			{
				id: 11,
				song_name: "Crying Over You",
				song_cover: "song_cryingoveryou.jpg_1668927459720.jpeg",
				song_path: "song_CryingOverYou-JustaTeeBinz.mp3_1668927459720.mpeg",
				song_listened: 0,
				song_lyric:
					"I'm crying over you bae\r\nI'm crying over you bae, bae, bae\r\nSẽ có những đớn đau không thành lời\r\nSẽ có những vết thương theo một đời\r\nDù mình đã cắn thật chặt đôi môi sau bao điều mặn đắng\r\nNhưng sao hôm nay con tim anh quên rằng anh là người mạnh mẽ vô cùng\r\nCó lẽ đã quá lâu cho một người\r\nGiấu hết yếu đuối bên trong nụ cười\r\nRồi vội vàng nhắm mắt chậm lại đôi chân đi sau thời gian cùng những vỡ tan\r\nI'm crying over you bae\r\nI'm crying over you bae\r\nKhi anh chẳng thể giữ mãi những cảm xúc vô tình bấy lâu\r\nI'm crying over you\r\nChơ vơ đơn côi, bên những thứ xa xôi\r\nI'm crying over you bae\r\nI'm crying over you bae\r\nChe đi một màu trắng xoá lăn dài xuống nơi gò má này\r\nI'm crying over you\r\nChơ vơ đơn côi, bên những thứ xa xôi\r\nI'm crying over...\r\nChưa bao giờ em thấy anh khóc\r\nĐâu có nghĩa là nước mắt anh không rơi đâu\r\nChỉ là không muốn em biết anh yếu đuối\r\nNhưng em đừng để tâm nhé, anh không sao đâu\r\nVà giờ trên mắt anh lại là những giọt lệ\r\nYêu em, anh đã quên mất, anh từng mạnh mẽ\r\nĐừng, xa anh để cho nỗi nhớ làm nhoà đi hết bức tranh anh từng vẽ\r\nVẫn đó màu mắt xanh còn ít bình yên\r\nVáy trắng vẫn còn tinh khiết\r\nNhưng con tim em đã lạnh hơn nhiều lắm\r\nTình yêu anh vẫn chưa đủ để sưởi ấm cho con tim đã trải qua quá nhiều nỗi đau, anh biết chứ\r\nEm cần nhiều hơn thế, anh biết chứ\r\nAnh nào muốn nước mắt anh rơi, no\r\nAnh đâu muốn hai đứa hai nơi đâu\r\nVì vậy anh ghét con người yếu đuối trong anh\r\nNhưng bên em ranh giới đó rất mong manh\r\nEm cho anh cười, cho anh khóc\r\nThay đổi nhanh trong phúc chốc\r\nCho anh buồn cho anh vui\r\nĐưa anh qua từng cung bậc của cảm xúc, em...\r\nVà khi đi đến nơi nỗi đau em buông tay anh nơi đây, chân lạc giữa đêm, babe\r\nYou don't know everytnight\r\nI'm crying over you bae (yea)\r\nI'm crying over you bae\r\nKhi anh chẳng thể giữ mãi những cảm xúc vô tình bấy lâu\r\nI'm crying over you\r\nChơ vơ đơn côi, bên những thứ xa xôi\r\nI'm crying over you bae\r\nI'm crying over you bae\r\nChe đi một màu trắng xoá lăn dài xuống nơi gò má này\r\nI'm crying over you\r\nChơ vơ đơn côi, bên những thứ xa rồi\r\nI'm crying over\r\nAnh không biết trước khi cơn mưa đến\r\nMưa vô tình (Tí tách tí tách rơi)\r\nĐể đôi vai ngấm tận cùng\r\nQuên hết lạnh lùng\r\nAnh buông mình theo cảm xúc\r\nCứ mặc mưa hay là em làm tan vỡ baby alright (alright)\r\nI'm alright baby, i'm alright can you feel that, baby\r\nVị mặn chia đôi\r\nThay cho bao ngọt ngào đã trôi qua\r\nĐôi môi anh bây giờ đắng lắm\r\nNhưng anh đành phải nuốt thôi vì mất em rồi\r\nNước mắt không giúp anh được nhiều\r\nKhông giúp anh lấy lại những thứ anh từng yêu, no\r\nNếu muốn khóc cho hết đi nỗi buồn\r\nVì ít nhất anh biết ta đã một lần yêu nhau\r\nVà những phút yếu mềm anh cần lắm\r\nMột cái ôm thật chặt từ đôi tay\r\nNhững lúc tuyệt vọng anh cần lắm\r\nGiọng em nói \"ay, are you ok?\" (Uhm)\r\nEm, giờ nơi đây tối lắm\r\nEm, giờ tim anh rối lắm\r\nAnh cố cười nhưng nước mắt vẫn cứ tuôn thôi\r\nLàm đôi tay anh có lúc như muốn buông xuôi\r\nTất cả\r\nNhưng anh nhớ rằng\r\nEm từng nói là\r\nChỉ cần một người giữ, thì ta vẫn còn hy vọng\r\nVậy giờ hy vọng của anh đang nơi đâu?\r\nBabe don't you know\r\nI'm crying over you bae\r\nI'm crying over you bae\r\nKhi anh chẳng thể giữ mãi những cảm xúc, vô tình bấy lâu\r\nI'm crying over you\r\nChơ vơ đơn côi, bên những thứ xa xôi\r\nI'm crying over you bae\r\nI'm crying over you bae\r\nChe đi một màu trắng xoá lăn dài xuống nơi gò má này\r\nVì ngày đó anh chưa bao giờ muốn em nhìn\r\nI'm crying over\r\nI'm crying over\r\nI'm crying over\r\nI'm crying over\r\nChơ vơ đơn côi, bên những thứ đã qua rồi\r\nI'm crying over\r\nI'm crying over\r\nI'm crying over\r\nChe đi một màu trắng xoá lăn dài xuống nơi gò má này\r\nI'm crying over you\r\nChơ vơ đơn côi, bên những thứ xa xôi\r\nI'm crying over",
				song_duration: "05:39",
				author_name: "Justatee",
				artist_id: 4,
				artist_name: "Binz ft Justatee",
				category_id: 1,
				created_at: "2022-11-20",
				updated_at: "2022-11-20",
			},
			{
				id: 10,
				song_name: "Sau này",
				song_cover: "song_saunay.jpg_1668927280607.jpeg",
				song_path: "song_SauNayHuLai-LuuNhuocAnh.mp3_1668927280607.mpeg",
				song_listened: 0,
				song_lyric:
					"Hòu lái\r\nWǒ zǒng suàn xué huì le rú hé qù ài\r\nKě xī nǐ zǎo yǐ yuǎn qù\r\nXiāo shī zài rén hǎi\r\n\r\n\r\nHòu lái\r\nZhōng yú zài yǎn lèi zhōng míng bai\r\nYǒu xiē rén yī dàn cuò guò jiù bù zài\r\n\r\n\r\nZhī zi huā bái huā bàn\r\nLuò zài wǒ lán sè bǎi zhě qún shàng\r\nÀi nǐ nǐ qīng shēng shuō\r\nWǒ dī xià tou wén jiàn yī zhèn fēn fāng\r\nNà ge yǒng héng de yè wǎn\r\n\r\n\r\nShí qī suì zhòng xià\r\nNǐ wěn wǒ de nà ge yè wǎn\r\nRàng wǒ wǎng hòu de shí guāng\r\nMěi dāng yǒu gǎn tàn\r\nZǒng xiǎng qǐ dāng tiān de xīng guāng\r\nNà shí hou de ài qíng\r\nWèi shén me jiù néng nà yàng jiǎn dān\r\nÉr yòu shì wèi shén me rén nián shǎo shí\r\nYī dìng yào ràng shēn ài de rén shòu shāng\r\n\r\n\r\nZài zhè xiāng shì de shēn yè li\r\nYě zài jìng jìng zhuī huǐ gǎn shāng\r\nRú guǒ dāng shí wǒ men néng bù nà me jué jiàng\r\nXiàn zài yě bù nà me yí hàn\r\nNǐ dōu rú hé huí yì wǒ\r\nDài zhe xiào huò shì hěn chén mò\r\nZhè xiē nián lái yǒu méi yǒu rén néng ràng nǐ bù jì mò\r\n\r\n\r\nYǒng yuǎn bù huì zài chóng lái\r\nYǒu yī gè nán hái ài zhe nà ge nǚ hái",
				song_duration: "05:41",
				author_name: "Lưu Nhược Anh",
				artist_id: 4,
				artist_name: "Lưu Nhược Anh",
				category_id: 3,
				created_at: "2022-11-20",
				updated_at: "2022-11-20",
			},
			{
				id: 9,
				song_name: "Thatxx",
				song_cover: "song_thatxx.jpg_1668918152432.jpeg",
				song_path: "song_ThatXx-GDRAGON.mp3_1668918152433.mpeg",
				song_listened: 1,
				song_lyric:
					"우연히 길을 걷다 네 남잘 봤어(Yea I saw him)\r\n혹시나 했던 내 예감이 맞았어 (I told you)\r\n네가 준 반지를 빼고 한쪽엔 팔짱을 끼고\r\n그냥 여기까지만 말할게 (I don't wanna hurt you)\r\n근데 오히려 너는 내게 화를 내 (Why?)\r\n그는 절대로 그럴 리가 없대 (Sure you're right)\r\n나는 네 눈칠 살피고 내가 잘 못 본 거라고\r\n그래 널 위해 거짓말할게 (I'm sorry)\r\nOh 날 몰라주는 네가 미워\r\n이 기다림이 싫어\r\n그 손 이제 놓으라고\r\n네가 슬퍼할 때면 나는\r\n죽을 것만 같다고 baby\r\n그 새끼보다 내가 못한 게 뭐야\r\n도대체 왜 나는 가질 수 없는 거야\r\n그 새끼는 너를 사랑하는 게 아냐\r\n언제까지 바보같이 울고만 있을 거야\r\n넌 그 사람 얘길 할 땐 행복해 보여 (You look happy)\r\n이렇게라도 웃으니 좋아 보여 (I'm happy)\r\n그를 정말 사랑한다고\r\n마치 영원할거라고 믿는 네 모습이\r\nI don't know what to say no mo'\r\n너의 친구들 모두 그를 잘 알아 (yup they know)\r\n뻔히 다 보이는걸 너만 왜 못 봐 (It's you)\r\nThey say love is blind\r\nOh baby you so blind\r\n제발 헤어지기를 바랄게\r\nOh 날 몰라주는 네가 미워\r\n이 기다림이 싫어\r\n그 손 이제 놓으라고\r\n네가 슬퍼할 때면 나는\r\n죽을 것만 같다고 baby\r\n그 새끼보다 내가 못한 게 뭐야\r\n도대체 왜 나는 가질 수 없는 거야\r\n그 새끼는 너를 사랑하는 게 아냐\r\n언제까지 바보같이 울고만 있을 거야\r\nYeah, 비싼 차에 예쁜 옷\r\n고급 레스토랑 넌 잘 어울려\r\n하지만 네 옆 그 X는 정말 아냐\r\n너랑은 안 어울려\r\n네 앞에서 거짓미소를 지으며\r\n네 볼과 머릿결을 만지며\r\n속으론 분명 다른 여자를 생각해\r\n어쩜 그럴 수 있니 죄 같애\r\n네가 흘린 눈물만큼 내가 더 잘해줄게 baby\r\n너 혼자 감당할 아픔 내게도 좀 나눠줄래 baby\r\n나 좀 봐달라고 그대 사랑이 왜 나란걸 몰라\r\n왜 너만 몰라\r\n그 새끼보다 내가 못한 게 뭐야\r\n도대체 왜 나는 가질 수 없는 거야\r\n그 새끼는 너를 사랑하는 게 아냐\r\n언제까지 바보같이 울고만 있을 거야\r\n그 새끼보다 내가 못한 게 뭐야\r\n도대체 왜 나는 가질 수 없는 거야\r\n그 새끼는 너를 사랑하는 게 아냐\r\n언제까지 바보같이 울고만 있을 거야",
				song_duration: "03:19",
				author_name: "G-dragon",
				artist_id: 6,
				artist_name: "G-dragon",
				category_id: 2,
				created_at: "2022-11-20",
				updated_at: "2022-11-20",
			},
			{
				id: 8,
				song_name: "Muộn rồi mà sao còn",
				song_cover: "song_muonroimasaocon.jpg_1668915908035.jpeg",
				song_path: "song_MuonRoiMaSaoCon-SonTungMTP.mp3_1668915908036.mpeg",
				song_listened: 1,
				song_lyric:
					"Muộn rồi mà sao còn\r\nNhìn lên trần nhà rồi quay ra lại quay vào\r\nNằm trằn trọc vậy đến sáng mai\r\nÔm tương tư nụ cười của ai đó\r\nLàm con tim ngô nghê như muốn khóc oà\r\nVắt tay lên trên trán mơ mộng\r\nĐược đứng bên em trong nắng xuân hồng\r\nMột giờ sáng\r\nTrôi qua trôi nhanh kéo theo ưu phiền miên man\r\nÂm thầm gieo tên em vẽ lên hi vọng\r\nĐúng là yêu thật rồi còn không thì hơi phí này\r\nCứ thế loanh quanh loanh quanh loanh quanh lật qua lật lại hai giờ\r\nNhững ngôi sao trên cao\r\nLà người bạn tâm giao\r\nLắng nghe anh luyên thuyên về một tình đầu đẹp tựa chiêm bao\r\nCó nghe thôi đã thấy ngọt ngào đủ biết anh si mê em nhường nào\r\nÍt khi văn thơ anh dạt dào bụng đói nhưng vui quên luôn cồn cào\r\nNắm đôi tay kiêu sa\r\nĐược một lần không ta\r\nNghĩ qua thôi con tim trong anh đập tung lên rung nóc rung nhà\r\nHoá ra yêu đơn phương một người\r\nHoá ra khi tơ vương một người\r\nBa giờ đêm vẫn ngồi cười\r\nCứ ôm anh đi ôm anh đi ôm anh đi ôm anh đi\r\nÔm trong cơn mơ trong cơn mơ trong cơn mơ ôm trong cơn mơ\r\nCó thế cũng khiến anh vui điên lên\r\nNgỡ như em đang bên\r\nChắp bút đôi ba câu thơ ngọt ngào\r\nMuốn em đặt tên\r\nCứ ôm anh đi ôm anh đi ôm anh đi ôm anh đi\r\nÔm trong giấc mơ trong cơn mơ trong cơn mơ ôm trong cơn mơ\r\nYêu đến vậy thôi phát điên rồi làm sao giờ\r\nChịu\r\nĐêm nay không ngủ tay kê lên tủ\r\nMiên man anh tranh thủ\r\nChơi vơi suy tư bao nhiêu cho đủ\r\nYêu em ngu ngơ mình tôi\r\nYêu không quan tâm ngày trôi\r\nYêu ánh mắt bờ môi\r\nYêu đơn phương vậy thôi\r\nLại còn chối\r\nCon tim thẹn thùng đập lạc lối liên hồi\r\nĐừng chày cối\r\nMiệng cười cả ngày vậy là chết toi rồi\r\nNgày càng nhiều thêm\r\nTình yêu cho em ngày càng nhiều thêm\r\nMuốn nắm đôi bàn tay đó một lần\r\nDu dương chìm sâu trong từng câu ca dịu êm\r\nNhững ngôi sao trên cao là người bạn tâm giao\r\nLắng nghe anh luyên thuyên về một tình đầu đẹp tựa chiêm bao\r\nCó nghe tôi đã thấy ngọt ngào đủ biết anh si mê em nhường nào\r\nÍt khi văn thơ anh dạt dào bụng đói nhưng vui quên luôn cồn cào\r\nNắm đôi tay kiêu sa\r\nĐược một lần không ta\r\nNghĩ qua thôi con tim trong anh đập tung lên rung nóc rung nhà\r\nHoá ra yêu đơn phương một người\r\nHoá ra khi tơ vương một người\r\nBa giờ đêm vẫn ngồi cười\r\nCứ ôm anh đi ôm anh đi ôm anh đi ôm anh đi\r\nÔm trong cơn mơ trong cơn mơ trong cơn mơ ôm trong cơn mơ\r\nCó thế cũng khiến anh vui điên lên\r\nNgỡ như em đang bên\r\nChắp bút đôi ba câu thơ ngọt ngào\r\nMuốn em đặt tên\r\nCứ ôm anh đi ôm anh đi ôm anh đi ôm anh đi\r\nÔm trong giấc mơ trong cơn mơ trong cơn mơ ôm trong cơn mơ\r\nYêu đến vậy thôi phát điên rồi làm sao giờ\r\nEm xinh như một thiên thần\r\nNhư một thiên thần\r\nNhư một thiên thần\r\nNgỡ như em là thiên thần\r\nXinh như một thiên thần\r\nNhư một thiên thần\r\nEm xinh như một thiên thần\r\nNhư một thiên thần\r\nNhư một thiên thần\r\nNgỡ như em là thiên thần\r\nNgỡ như ngỡ như\r\nNgỡ như ngỡ như ngỡ như\r\nCứ ôm anh đi ôm anh đi ôm anh đi ôm anh đi\r\nÔm trong cơn mơ trong cơn mơ trong cơn mơ ôm trong cơn mơ\r\nCó thế cũng khiến anh vui điên lên\r\nNgỡ như em đang bên\r\nChắp bút đôi ba câu thơ ngọt ngào\r\nMuốn em đặt tên\r\nCứ ôm anh đi ôm anh đi ôm anh đi ôm anh đi\r\nÔm trong giấc mơ trong cơn mơ trong cơn mơ ôm trong cơn mơ\r\nYêu đến vậy thôi phát điên rồi làm sao giờ",
				song_duration: "04:35",
				author_name: "Duy Duc Nguyen",
				artist_id: 5,
				artist_name: "Sơn Tùng MTP",
				category_id: 1,
				created_at: "2022-11-20",
				updated_at: "2022-11-20",
			},
			{
				id: 7,
				song_name: "Payphone",
				song_cover: "song_payphone.jpg_1667722206608.jpeg",
				song_path: "song_Payphone-Maroon5.mp3_1667722206611.mpeg",
				song_listened: 9,
				song_lyric:
					"I'm at a payphone trying to call home\r\nAll of my change I spent on you\r\nWhere have the times gone\r\nBaby it's all wrong, where are the plans we made for two?\r\n\r\nYeah, I, I know it's hard to remember\r\nThe people we used to be\r\nIt's even harder to picture\r\nThat you're not here next to me\r\nYou say it's too late to make it\r\nBut is it too late to try?\r\nAnd in our time that you wasted\r\nAll of our bridges burned down\r\n\r\nI've wasted my nights\r\nYou turned out the lights\r\nNow I'm paralyzed\r\nStill stuck in that time when we called it love\r\nBut even the sun sets in paradise\r\n\r\nI'm at a payphone trying to call home\r\nAll of my change I spent on you\r\nWhere have the times gone\r\nBaby it's all wrong, where are the plans we made for two?\r\n\r\nIf happy ever after did exist\r\nI would still be holding you like this\r\nAll those fairytales are full of sh*t\r\nOne more stupid love song I'll be sick\r\n\r\nYou turned your back on tomorrow\r\nCause you forgot yesterday\r\nI gave you my love to borrow\r\nBut just gave it away\r\nYou can't expect me to be fine\r\nI don't expect you to care\r\nI know I've said it before\r\nBut all of our bridges burned down\r\n\r\nI've wasted my nights\r\nYou turned out the lights\r\nNow I'm paralyzed\r\nStill stucked in that time when we called it love\r\nBut even the sun sets in paradise\r\n\r\nI'm at a payphone trying to call home\r\nAll of my change I spent on you\r\nWhere have the times gone\r\nBaby it's all wrong, where are the plans we made for two?\r\n\r\nIf happy ever after did exist\r\nI would still be holding you like this\r\nAll those fairytales are full of sh*t\r\nOne more stupid love song I'll be sick\r\n\r\nNow I'm at a payphone...",
				song_duration: "03:51",
				author_name: "Maroon 5",
				artist_id: 4,
				artist_name: "Maroon 5",
				category_id: 3,
				created_at: "2022-11-06",
				updated_at: "2022-11-14",
			},
			{
				id: 5,
				song_name: "Khóc",
				song_cover: "song_dong-nhi-khoc-1736.jpg_1667381263681.jpeg",
				song_path: "song_Khoc-DongNhi.mp3_1667381268065.mpeg",
				song_listened: 8,
				song_lyric:
					"Tình tan vỡ\r\nMột mình bước trong đêm\r\nTìm lại những giấc mơ\r\nXưa anh của ngày xưa ấm êm\r\nNào ngờ cơn gió\r\nĐã mang sương đến vây kín\r\nChe lấp ánh sáng nơi chân trời\r\nNước mắt tràn bờ mi\r\nLòng đau xót nghe trái tim khóc trong lặng câm\r\nMà vì sao tình em giờ đây vẫn mãi chờ người\r\nChờ tháng năm yêu ngày xưa giờ mong mãi\r\nNgày anh đi trời mưa phùn rơi thấm ướt đường dài\r\nĐể em ngồi lặng nhìn theo bóng anh\r\nLệ cay khóe vì một người đã ra đi không trở về\r\nNhưng nước mắt đó cũng chỉ làm vết thương thêm đau\r\nVì sao em lại khóc\r\nVì sao em lại nhớ\r\nDẫu biết anh chẳng còn như lúc xưa\r\nLệ cay khóe vì một người đã đi mang theo giấc mơ\r\nNơi đó chôn giấu ký ức cùng tháng năm êm đềm\r\nVì anh đã đi mãi\r\nVì em còn yêu anh\r\nDẫu biết anh chẳng còn nhớ đến em\r\nGiọt sầu hờn cay\r\nGiọt sầu lệ tuôn\r\nGiọt buồn lệ rơi nào ai muốn\r\nSao không cho bao nhiêu yêu thương kia nằm xuống kia\r\nĐể rồi cuốn xa\r\nKhi đôi môi nhạt nhoà giấc mơ dấu vết tình buồn ta\r\nDù cách xa nhói lòng\r\nDù biết nhớ hoài công\r\nKhông gian bao la mênh mông mang đi hoà tan nước mắt trong em\r\nKhóc âm thầm mưa rơi\r\nĐêm sầu đơn côi\r\nSao tim em vẫn chở một nỗi sầu bơ vơ\r\nDù biết anh sẽ không về đâu\r\nVì bao nhiêu lời thề đầu\r\nEm chôn sâu vào trong nỗi nhớ tình đầu rồi\r\nĐành khóc vậy thôi\r\nĐành khóc vậy thôi\r\nThế sao không quên anh đi\r\nCho bao nhiêu nước mắt bao nhiêu đau thương\r\nKhông còn rơi trên bờ mi héo úa\r\nVì anh không như lời anh hứa\r\nAnh đã không như ngày xưa\r\nTay trong tay vai kề vai trên con đường về đón đưa\r\nThì quên nhau đi được chưa\r\nVì anh là thế đó\r\nAnh như gió nồng nàn bên mây rồi mây tan\r\nTình cũng tan\r\nGió vội vàng như anh xa rồi\r\nĐừng trách vì gió vô tình người ơi\r\nTình đầu giọt lệ sầu\r\nCũng khô mang theo thời gian\r\nHãy tìm lối đi riêng như anh đi tìm cuộc sống mới\r\nEm khóc để quên sầu quên anh và quên niềm đau\r\nThì xin em hãy khóc\r\nLệ cay khóe vì một người đã ra đi không trở về\r\nNhưng nước mắt đó cũng chỉ làm vết thương thêm đau\r\nVì sao em lại khóc\r\nVì sao em lại nhớ\r\nDẫu biết anh chẳng còn như lúc xưa\r\nLệ cay khóe vì một người đã đi mang theo giấc mơ\r\nNơi đó chôn giấu ký ức cùng tháng năm êm đềm\r\nVì anh đã đi mãi\r\nVì em còn yêu anh\r\nDẫu biết anh chẳng còn nhớ đến em\r\nLệ cay khoé vì một người đã ra đi không trở về\r\nNhưng nước mắt đó cũng chỉ làm vết thương thêm đau\r\nVì sao em lại khóc\r\nVì sao em lại nhớ\r\nDẫu biết anh chẳng còn như lúc xưa (dẫu biết em chẳng còn như lúc xưa)\r\nLệ cay khóe vì một người đã đi mang theo giấc mơ\r\nNơi đó chôn giấu ký ức cùng tháng năm êm đềm\r\nVì anh đã đi mãi\r\nVì em còn yêu anh\r\nDẫu biết anh chẳng còn nhớ đến em",
				song_duration: "04:42",
				author_name: "Đông Nhi",
				artist_id: null,
				artist_name: "Đông Nhi ft Rapper không tên",
				category_id: 1,
				created_at: "2022-11-02",
				updated_at: "2022-11-19",
			},
			{
				id: 4,
				song_name: "Fiction",
				song_cover: "song_fiction.jpg_1667378906185.jpeg",
				song_path: "song_Fiction-Beast.mp3_1667378906187.mpeg",
				song_listened: 13,
				song_lyric:
					"아직 난 널 잊지 못하고 모든걸 다 믿지 못하고\r\n이렇게 널 보내지 못하고 오늘도\r\n다시 만들어볼게 우리 이야기\r\n끝나지 않게 아주 기나긴\r\n살갗을 파고 스며드는 상실감은 잠시 묻어둘게\r\n새로 써 내려가 시작은 행복하게 웃고 있는 너와 나\r\n네가 날 떠나지 못하게 배경은 출구가 없는 좁은 방 안\r\n아무렇지 않게 네게 키스하고\r\n달콤한 너의 곁을 떠나가질 못해\r\n우린 끝이라는건 없어\r\n이렇게 난 또 (fiction in fiction)\r\n잊지 못하고 (fiction in fiction)\r\n내 가슴 속에 끝나지 않을 이야길 쓰고 있어\r\n널 붙잡을게 (fiction in fiction)\r\n놓지 않을게 (fiction in fiction in fiction)\r\n끝나지 않은 너와 나의 이야기 속에서\r\n오늘도 in fiction\r\n지금 여긴 행복한 이야기들밖에 없어\r\n너무 행복한 우리 둘만의 이야기가 이렇게\r\n(현실관 다르게)\r\n써 있어 점점 채워지고 있어\r\n너는 나에게로 달려와서 안기고\r\n품 안에 안긴 너를 나는 절대 놓지 못해\r\n우린 끝이라는건 없어\r\n이렇게 난 또 (fiction in fiction)\r\n잊지 못하고 (fiction in fiction)\r\n내 가슴 속에 끝나지 않을 이야길 쓰고 있어\r\n널 붙잡을게 (fiction in fiction)\r\n놓지 않을게 (fiction in fiction in fiction)\r\n끝나지 않은 너와 나의 이야기 속에서\r\n오늘도 in fiction\r\n다시 한 번 더 말하지만\r\n지금 너는 내 옆에 있다고 그렇게 믿고 있어 난\r\n난 목적을 잃어버린 작가\r\n이 소설의 끝은 어떻게 마무리 지어야 해\r\n사랑해 사랑해 사랑해 사랑해 사랑해 이 세 글자만 써\r\n내려가 무뎌진 펜 눈물로 얼룩진 낡은 종이 위로\r\n행복할 수도 슬플 수도 없어 이 이야기는\r\n지금 난 너무나도 행복한 생각에 이야기를 쓰지만\r\n모든게 바램일 뿐이라고 여전히\r\n난 행복한걸 (fiction in fiction in fiction)\r\n우리 함께인걸 (fiction in fiction in fiction)\r\n이제 시작인걸 (fiction in fiction in fiction)\r\n끝은 없는걸 (fiction in fiction in fiction)",
				song_duration: "03:54",
				author_name: "Nhóm BEAST",
				artist_id: null,
				artist_name: "Nhóm BEAST",
				category_id: 2,
				created_at: "2022-11-02",
				updated_at: "2022-11-19",
			},
			{
				id: 3,
				song_name: "Chàng trai đang thất tình",
				song_cover: "song_changtraidangthattinh.jpg_1666275758163.jpeg",
				song_path: "song_ChangTraiDangThatTinh-DatG,Binz.mp3_1666275758166.mpeg",
				song_listened: 5,
				song_lyric:
					"Vers 1:\r\n\r\nCó lẽ em cũng đã quên anh rồi (đã quên anh rồi)\r\n\r\nCó lẽ em cũng chẳng cần phải nhớ (chẳng cần phải nhớ đâu… em)\r\n\r\nGóc cuối bên hiên nhà, Chiều nay cũng đã có mưa\r\n\r\nGiờ khóc làm gì, khi em cười (khi… em… cười)\r\n\r\nCó lẽ yêu thương bao lâu này giờ buông, là buông\r\n\r\nCó lẽ em cứ, vương vấn mãi, câu chuyện buồn (mãi câu… chuyện buồn)\r\n\r\nĐến hết đêm nay thôi, ngày mai lòng này sẽ khác\r\n\r\nNhưng không, tim anh vẫn nhớ mùa đông\r\n\r\nVậy giờ anh làm sao, làm sao có thể quên yêu thương ngày nào\r\n\r\nNhững ngày anh có em, vòng tay đơn sơ ấm áp\r\n\r\nVậy giờ đây thì sao, thì sao em ở đâu khi anh 1 mình\r\n\r\nTình yêu đầu tiên khắc sâu, dưới gốc hiên nhà có mưa..\r\n\r\nRap :\r\n\r\nBây giờ anh làm sao anh làm sao\r\n\r\nVùi chôn, anh vùi chôn trong kỉ niệm\r\n\r\nMây đen trôi, mây đen vẫn kéo đến\r\n\r\nBão giông thêm bão giông cứ thay phiên\r\n\r\nTrả lại anh bờ môi ấm, Trả lại anh đôi mắt hiền\r\n\r\nMới hôm qua còn an nhiên\r\n\r\nHôm nay là như vậy làm sao anh xoay chuyển đây\r\n\r\nAnh đã từng ngã vì nụ cười xinh\r\n\r\nTa đã từng gọi nhau là người tình\r\n\r\nTa đã từng coi nhau là hạnh phúc, có lẽ nỗi buồn luôn là điều ngoài dự tính\r\n\r\nPhố đã yên giờ thêm lắng, hàng cây đã không còn xen nắng\r\n\r\nCơn mưa sẽ không còn ấm êm ly cafe của anh càng thêm đường càng thêm đắng\r\n\r\nĐừng nói với anh ta đã chưa từng đậm sâu\r\n\r\nNói với anh ta cần nhau\r\n\r\nNói với anh ta sẽ hạnh phúc nhưng không cần phải qua thêm một lần đau\r\n\r\nĐừng làm nhớ thương kia dần lấp lối\r\n\r\nEm đừng làm căn phòng anh đầy ấp khói\r\n\r\nEm đừng biến nụ hôn này trở thành dĩ vãng\r\n\r\nThôi đừng để lời hứa ta trao phải hấp hối Nơi đây..\r\n\r\nmưa vẫn còn rơi rơi, hàng cây đó càng chơi vơi\r\n\r\nYêu dấu ngày cũ đó thôi cứ để cuốn trôi đi\r\n\r\nĐâu còn nước mắt chắc là khô luôn cả đôi mi\r\n\r\nEm vẫn luôn vô tư, thứ ta xa nhau vẫn vô lý\r\n\r\nUống mà vẫn không say rượu kia hẳng là vô vị\r\n\r\nKhông em ở quanh đây anh như kẻ đang vô tri\r\n\r\nChúng ta làm nhau đau ok chắc là cố ý\r\n\r\nĐi ngang qua nhau vậy như ta chưa từng có gì\r\n\r\nVers 2 :\r\n\r\nCó lẽ yêu thương bao lâu này giờ buông, là buông\r\n\r\nCó lẽ em cứ, vương vấn mãi, câu chuyện buồn (mãi câu… chuyện buồn)\r\n\r\nĐến hết đêm nay thôi, ngày mai lòng này sẽ khác\r\n\r\nNhưng không, tim anh vẫn nhớ mùa đông\r\n\r\nVậy giờ anh làm sao, làm sao có thể quên yêu thương ngày nào\r\n\r\nNhững ngày anh có em, vòng tay đơn sơ ấm áp\r\n\r\nVậy giờ đây thì sao, thì sao em ở đâu khi anh 1 mình\r\n\r\nTình yêu đầu tiên khắc sâu, dưới gốc hiên nhà có mưa…",
				song_duration: "04:45",
				author_name: "Đạt G",
				artist_id: 4,
				artist_name: "Đạt G ft Binz",
				category_id: 1,
				created_at: "2022-10-20",
				updated_at: "2022-11-14",
			},
			{
				id: 2,
				song_name: "Crooked",
				song_cover: "song_TUN02973.jpg_1666260630440.jpg",
				song_path: "song_Crooked-GDRAGON.mp3_1666260632096.mpeg",
				song_listened: 3,
				song_lyric:
					"[English:]\r\n\r\nNothing ever lasts forever\r\nIn the end, you changed\r\nThere is no reason, no sincerity\r\nTake away such a thing as love\r\nTonight, I’ll be crooked\r\n\r\nLeave me alone\r\nI was alone anyway\r\nI have no one, everything is meaningless\r\nTake away the sugar-coated comfort\r\nTonight, I’ll be crooked\r\n\r\nI scream and get dizzy\r\nI vent out of boredom to other couples\r\nI start fights for no reason like a town gangster\r\nSometimes, I purposely shake my leg, crookedly\r\nThe main characters of the movie called this world is you and me\r\nA lonely island, lost and wandering\r\nThe empty streets are filled with those who are alone\r\nUnlike my heart, the weather is so damn nice\r\n\r\nI used to believe in you alone and I was happy\r\nBut like a joke, I am left alone\r\nYou used to promise me with your pinky finger\r\nBut in the end\r\n\r\nNothing ever lasts forever\r\nIn the end, you changed\r\nThere is no reason, no sincerity\r\nTake away such a thing as love\r\nTonight, I’ll be crooked\r\n\r\nLeave me alone\r\nI was alone anyway\r\nI have no one, everything is meaningless\r\nTake away the sugar-coated comfort\r\nTonight, I’ll be crooked\r\n\r\nI’ll put on thick eyeliner, use a whole can of hairspray\r\nLeather pants, leather jacket with a frown\r\nI want to hide my pain and become even more crooked\r\nSo you can feel sorry, I’ll spit toward the sky\r\nYou’re scared of my crude words and my rough eyes\r\nBut actually, I’m afraid, I want to go back but I have nowhere to go\r\nI want to love but no one to love, what am I supposed to do?\r\nI can’t turn it back\r\n\r\nI used to believe in you alone and I was happy\r\nBut like a joke, I am left alone\r\nYou used to promise me with your pinky finger\r\nBut in the end\r\n\r\nNothing ever lasts forever\r\nIn the end, you changed\r\nThere is no reason, no sincerity\r\nTake away such a thing as love\r\nTonight, I’ll be crooked\r\n\r\nLeave me alone\r\nI was alone anyway\r\nI have no one, everything is meaningless\r\nTake away the sugar-coated comfort\r\nTonight, I’ll be crooked\r\n\r\nWill you not say anything for me tonight?\r\nI didn’t know being alone would be this hard (I miss you)\r\nWill you be my friend tonight?\r\nOn this good day, this beautiful day, this day where I miss you\r\nTonight, I’ll be crooked\r\n\r\n[Romanized:]\r\n\r\nYeongwonhan geon jeoldae eobseo\r\nGyeolguge neon byeonhaetji\r\nIyudo eobseo jinsimi eobseo\r\nSarang gateun sori ttawin jibeo chyeo\r\nOneulbameun ppittakhage\r\n\r\nNaebeoryeodwo\r\nEochapi nan honjayeotji\r\nAmudo eobseo da uimi eobseo\r\nSatang ballin wiro ttawin jibeo chyeo\r\nOneulbameun ppittakhage\r\n\r\nBeoreokbeoreok sorichyeo naneun hyeongijeung\r\nNae simsimpuri hwa puri sangdaeneun dareun yeonindeul\r\nGwaenhi sibi georeo dongne yangachicheoreom\r\nGakkeum nan ppittakhage darireul ilbureo jeoreo\r\nI sesangiran yeonghwa sok juingongeun neowana\r\nGal goseul irko hemaeneun oeroun jeo seom hana\r\nTeongteong bin gilgeorireul gadeuk chaeun gireogideul\r\nNae mamgwa dalli nalssineun cham deoreopgedo joha\r\n\r\nNeo hana mitgo manyang haengbokhaesseotdeon naega\r\nUseupge namgyeojyeosseo\r\nSaekkisongarak geolgo maengsehaesseotdeon nega\r\nGyeolgugen\r\n\r\nYeongwonhan geon jeoldae eobseo\r\nGyeolguge neon byeonhaetji\r\nIyudo eobseo jinsimi eobseo\r\nSarang gateun sori ttawin jibeo chyeo\r\nOneulbameun ppittakhage\r\n\r\nNaebeoryeodwo\r\nEochapi nan honjayeotji\r\nAmudo eobseo da uimi eobseo\r\nSatang ballin wiro ttawin jibeo chyeo\r\nOneulbameun ppittakhage\r\n\r\nJiteun airain geutgo seupeurei han tong da sseugo\r\nGajukbaji, gajukjaket geolchigo insang sseugo\r\nApeumeul sumgin chae apeuro deo bittureojillae\r\nNega mianhaejige haneureda chimeul kak\r\nTubakhaejin nae maltuwa geochireojin nunbichi museowo neo\r\nSireun na itji duryeowojyeo doragagopeunde gal de eopgo\r\nSaranghagopeunde sangdae eopgo mwol eojjeorago\r\nDori kil su eopdeorago\r\n\r\nNeo hana mitgo manyang haengbokhaesseotdeon naega\r\nUseupge namgyeojyeosseo\r\nSaekkisongarak geolgo maengsehaesseotdeon nega\r\nGyeolgugen\r\n\r\nYeongwonhan geon jeoldae eobseo\r\nGyeolguge neon byeonhaetji\r\nIyudo eobseo jinsimi eobseo\r\nSarang gateun sori ttawin jibeo chyeo\r\nOneulbameun ppittakhage\r\n\r\nNaebeoryeodwo\r\nEochapi nan honjayeotji\r\nAmudo eobseo da uimi eobseo\r\nSatang ballin wiro ttawin jibeo chyeo\r\nOneulbameun ppittakhage\r\n\r\nOneulbameun nareul wihae amu mal marajullaeyo\r\nHonjain ge na ireoke himdeul jul mollanneunde (geudaega bogo sipeo)\r\nOneulbamman nareul wihae chinguga doeeojullaeyo\r\nI joheun nal areumdaun nal nega geuriun nal\r\nOneulbameun ppittakhage",
				song_duration: "03:44",
				author_name: "G-Dragon",
				artist_id: null,
				artist_name: "G-Dragon",
				category_id: 2,
				created_at: "2022-10-20",
				updated_at: "2022-11-15",
			},
		];
	} else {
		data = [
			{
				id: 1,
				song_name: "Cơn mưa ngang qua part2",
				song_cover: "song_cb2-thumb@2x.jpg_1666257355901.jpg",
				song_path: "song_ConMuaNgangQuaPart2-M-TP.mp3_1666257355901.mpeg",
				song_listened: 7,
				song_lyric:
					"Cơn mưa ngang qua…Cơn mưa ngang qua..Eh..!!\r\nLadykillah…M-tppppp..!!\r\nCan you feel me.\r\nEhhhhhhhhhhhhhhhhhhhhhh.\r\n\r\nHOOK:\r\nBỏ lại sau lưng tất cả..Bỏ lại sau lưng tất cả..\r\nĐể rời xa anh và bên ai,kề bên vai là ai..???\r\nLục tìm trong cơn mưa này..Lục tìm trong cơn mưa này..\r\nNụ cười em nơi đâu,đâu,đâu..\r\nNước mắt rơi,rơi..\r\nMong người về đây!\r\n\r\n\r\nCơn mưa ngang qua đã mang em đi xa nơi anh.\r\nCơn mưa ngang qua đã mang em phôi pha xa nơi anh.\r\nMột giây thôi..Ùa về một giây thôi..\r\nHỡi những giấc mơ,em mang trao anh với bao kỉ niệm.\r\nHãy nói rõ ra đi…Sao em như vậy..!!\r\nĐôi tay anh giờ này nó quá yếu mềm.\r\nKhông thể níu em trở lại về,một giây được bên em sao quá xa..Phải chăng em đã quên rồi..!!!\r\n\r\nCơn gió hãy tìm xem em ở đâu.?.Em ở đâu..??\r\nHãy nhắn em về đi,trở lại nơi em đã từng đánh rớt rơi một nụ cười.\r\nNhìn lại căn phòng sao quặn đau.\r\nTràn ngập bao nỗi buồn.\r\nMưa lại vội rơi và cướp mất em….Eh..Eh.\r\nHOOK:\r\nCơn mưa ngang qua mang em đi xa.\r\nCơn mưa ngang qua khiến em phôi pha.\r\nTim anh nghẹn ngào,tìm giấc mơ ngày nào…Uh..Ehhhh!\r\nSau cơn mưa anh bỗng thấy đau hơn.\r\nKhi tim em ra đi quên đi một bóng hình.\r\nXin người trở về…\r\nNíu em trở về..!!!Oh.",
				song_duration: "03:34",
				author_name: "Sơn tùng MTP",
				artist_id: 5,
				artist_name: "Sơn tùng MTP",
				category_id: 1,
				created_at: "2022-10-20",
				updated_at: "2022-11-22",
			},
		];
	}
	return res.status(200).send({ success: true, message: data, total: 11 });
});
app.get("/song/gettop100", async (req, res) => {
	const data = [
		{
			id: 4,
			song_name: "Fiction",
			song_cover: "song_fiction.jpg_1667378906185.jpeg",
			song_path: "song_Fiction-Beast.mp3_1667378906187.mpeg",
			song_listened: 13,
			song_lyric:
				"아직 난 널 잊지 못하고 모든걸 다 믿지 못하고\r\n이렇게 널 보내지 못하고 오늘도\r\n다시 만들어볼게 우리 이야기\r\n끝나지 않게 아주 기나긴\r\n살갗을 파고 스며드는 상실감은 잠시 묻어둘게\r\n새로 써 내려가 시작은 행복하게 웃고 있는 너와 나\r\n네가 날 떠나지 못하게 배경은 출구가 없는 좁은 방 안\r\n아무렇지 않게 네게 키스하고\r\n달콤한 너의 곁을 떠나가질 못해\r\n우린 끝이라는건 없어\r\n이렇게 난 또 (fiction in fiction)\r\n잊지 못하고 (fiction in fiction)\r\n내 가슴 속에 끝나지 않을 이야길 쓰고 있어\r\n널 붙잡을게 (fiction in fiction)\r\n놓지 않을게 (fiction in fiction in fiction)\r\n끝나지 않은 너와 나의 이야기 속에서\r\n오늘도 in fiction\r\n지금 여긴 행복한 이야기들밖에 없어\r\n너무 행복한 우리 둘만의 이야기가 이렇게\r\n(현실관 다르게)\r\n써 있어 점점 채워지고 있어\r\n너는 나에게로 달려와서 안기고\r\n품 안에 안긴 너를 나는 절대 놓지 못해\r\n우린 끝이라는건 없어\r\n이렇게 난 또 (fiction in fiction)\r\n잊지 못하고 (fiction in fiction)\r\n내 가슴 속에 끝나지 않을 이야길 쓰고 있어\r\n널 붙잡을게 (fiction in fiction)\r\n놓지 않을게 (fiction in fiction in fiction)\r\n끝나지 않은 너와 나의 이야기 속에서\r\n오늘도 in fiction\r\n다시 한 번 더 말하지만\r\n지금 너는 내 옆에 있다고 그렇게 믿고 있어 난\r\n난 목적을 잃어버린 작가\r\n이 소설의 끝은 어떻게 마무리 지어야 해\r\n사랑해 사랑해 사랑해 사랑해 사랑해 이 세 글자만 써\r\n내려가 무뎌진 펜 눈물로 얼룩진 낡은 종이 위로\r\n행복할 수도 슬플 수도 없어 이 이야기는\r\n지금 난 너무나도 행복한 생각에 이야기를 쓰지만\r\n모든게 바램일 뿐이라고 여전히\r\n난 행복한걸 (fiction in fiction in fiction)\r\n우리 함께인걸 (fiction in fiction in fiction)\r\n이제 시작인걸 (fiction in fiction in fiction)\r\n끝은 없는걸 (fiction in fiction in fiction)",
			song_duration: "03:54",
			author_name: "Nhóm BEAST",
			artist_id: null,
			artist_name: "Nhóm BEAST",
			category_id: 2,
			created_at: "2022-11-02",
			updated_at: "2022-11-19",
		},
		{
			id: 7,
			song_name: "Payphone",
			song_cover: "song_payphone.jpg_1667722206608.jpeg",
			song_path: "song_Payphone-Maroon5.mp3_1667722206611.mpeg",
			song_listened: 9,
			song_lyric:
				"I'm at a payphone trying to call home\r\nAll of my change I spent on you\r\nWhere have the times gone\r\nBaby it's all wrong, where are the plans we made for two?\r\n\r\nYeah, I, I know it's hard to remember\r\nThe people we used to be\r\nIt's even harder to picture\r\nThat you're not here next to me\r\nYou say it's too late to make it\r\nBut is it too late to try?\r\nAnd in our time that you wasted\r\nAll of our bridges burned down\r\n\r\nI've wasted my nights\r\nYou turned out the lights\r\nNow I'm paralyzed\r\nStill stuck in that time when we called it love\r\nBut even the sun sets in paradise\r\n\r\nI'm at a payphone trying to call home\r\nAll of my change I spent on you\r\nWhere have the times gone\r\nBaby it's all wrong, where are the plans we made for two?\r\n\r\nIf happy ever after did exist\r\nI would still be holding you like this\r\nAll those fairytales are full of sh*t\r\nOne more stupid love song I'll be sick\r\n\r\nYou turned your back on tomorrow\r\nCause you forgot yesterday\r\nI gave you my love to borrow\r\nBut just gave it away\r\nYou can't expect me to be fine\r\nI don't expect you to care\r\nI know I've said it before\r\nBut all of our bridges burned down\r\n\r\nI've wasted my nights\r\nYou turned out the lights\r\nNow I'm paralyzed\r\nStill stucked in that time when we called it love\r\nBut even the sun sets in paradise\r\n\r\nI'm at a payphone trying to call home\r\nAll of my change I spent on you\r\nWhere have the times gone\r\nBaby it's all wrong, where are the plans we made for two?\r\n\r\nIf happy ever after did exist\r\nI would still be holding you like this\r\nAll those fairytales are full of sh*t\r\nOne more stupid love song I'll be sick\r\n\r\nNow I'm at a payphone...",
			song_duration: "03:51",
			author_name: "Maroon 5",
			artist_id: 4,
			artist_name: "Maroon 5",
			category_id: 3,
			created_at: "2022-11-06",
			updated_at: "2022-11-14",
		},
		{
			id: 5,
			song_name: "Khóc",
			song_cover: "song_dong-nhi-khoc-1736.jpg_1667381263681.jpeg",
			song_path: "song_Khoc-DongNhi.mp3_1667381268065.mpeg",
			song_listened: 8,
			song_lyric:
				"Tình tan vỡ\r\nMột mình bước trong đêm\r\nTìm lại những giấc mơ\r\nXưa anh của ngày xưa ấm êm\r\nNào ngờ cơn gió\r\nĐã mang sương đến vây kín\r\nChe lấp ánh sáng nơi chân trời\r\nNước mắt tràn bờ mi\r\nLòng đau xót nghe trái tim khóc trong lặng câm\r\nMà vì sao tình em giờ đây vẫn mãi chờ người\r\nChờ tháng năm yêu ngày xưa giờ mong mãi\r\nNgày anh đi trời mưa phùn rơi thấm ướt đường dài\r\nĐể em ngồi lặng nhìn theo bóng anh\r\nLệ cay khóe vì một người đã ra đi không trở về\r\nNhưng nước mắt đó cũng chỉ làm vết thương thêm đau\r\nVì sao em lại khóc\r\nVì sao em lại nhớ\r\nDẫu biết anh chẳng còn như lúc xưa\r\nLệ cay khóe vì một người đã đi mang theo giấc mơ\r\nNơi đó chôn giấu ký ức cùng tháng năm êm đềm\r\nVì anh đã đi mãi\r\nVì em còn yêu anh\r\nDẫu biết anh chẳng còn nhớ đến em\r\nGiọt sầu hờn cay\r\nGiọt sầu lệ tuôn\r\nGiọt buồn lệ rơi nào ai muốn\r\nSao không cho bao nhiêu yêu thương kia nằm xuống kia\r\nĐể rồi cuốn xa\r\nKhi đôi môi nhạt nhoà giấc mơ dấu vết tình buồn ta\r\nDù cách xa nhói lòng\r\nDù biết nhớ hoài công\r\nKhông gian bao la mênh mông mang đi hoà tan nước mắt trong em\r\nKhóc âm thầm mưa rơi\r\nĐêm sầu đơn côi\r\nSao tim em vẫn chở một nỗi sầu bơ vơ\r\nDù biết anh sẽ không về đâu\r\nVì bao nhiêu lời thề đầu\r\nEm chôn sâu vào trong nỗi nhớ tình đầu rồi\r\nĐành khóc vậy thôi\r\nĐành khóc vậy thôi\r\nThế sao không quên anh đi\r\nCho bao nhiêu nước mắt bao nhiêu đau thương\r\nKhông còn rơi trên bờ mi héo úa\r\nVì anh không như lời anh hứa\r\nAnh đã không như ngày xưa\r\nTay trong tay vai kề vai trên con đường về đón đưa\r\nThì quên nhau đi được chưa\r\nVì anh là thế đó\r\nAnh như gió nồng nàn bên mây rồi mây tan\r\nTình cũng tan\r\nGió vội vàng như anh xa rồi\r\nĐừng trách vì gió vô tình người ơi\r\nTình đầu giọt lệ sầu\r\nCũng khô mang theo thời gian\r\nHãy tìm lối đi riêng như anh đi tìm cuộc sống mới\r\nEm khóc để quên sầu quên anh và quên niềm đau\r\nThì xin em hãy khóc\r\nLệ cay khóe vì một người đã ra đi không trở về\r\nNhưng nước mắt đó cũng chỉ làm vết thương thêm đau\r\nVì sao em lại khóc\r\nVì sao em lại nhớ\r\nDẫu biết anh chẳng còn như lúc xưa\r\nLệ cay khóe vì một người đã đi mang theo giấc mơ\r\nNơi đó chôn giấu ký ức cùng tháng năm êm đềm\r\nVì anh đã đi mãi\r\nVì em còn yêu anh\r\nDẫu biết anh chẳng còn nhớ đến em\r\nLệ cay khoé vì một người đã ra đi không trở về\r\nNhưng nước mắt đó cũng chỉ làm vết thương thêm đau\r\nVì sao em lại khóc\r\nVì sao em lại nhớ\r\nDẫu biết anh chẳng còn như lúc xưa (dẫu biết em chẳng còn như lúc xưa)\r\nLệ cay khóe vì một người đã đi mang theo giấc mơ\r\nNơi đó chôn giấu ký ức cùng tháng năm êm đềm\r\nVì anh đã đi mãi\r\nVì em còn yêu anh\r\nDẫu biết anh chẳng còn nhớ đến em",
			song_duration: "04:42",
			author_name: "Đông Nhi",
			artist_id: null,
			artist_name: "Đông Nhi ft Rapper không tên",
			category_id: 1,
			created_at: "2022-11-02",
			updated_at: "2022-11-19",
		},
		{
			id: 1,
			song_name: "Cơn mưa ngang qua part2",
			song_cover: "song_cb2-thumb@2x.jpg_1666257355901.jpg",
			song_path: "song_ConMuaNgangQuaPart2-M-TP.mp3_1666257355901.mpeg",
			song_listened: 7,
			song_lyric:
				"Cơn mưa ngang qua…Cơn mưa ngang qua..Eh..!!\r\nLadykillah…M-tppppp..!!\r\nCan you feel me.\r\nEhhhhhhhhhhhhhhhhhhhhhh.\r\n\r\nHOOK:\r\nBỏ lại sau lưng tất cả..Bỏ lại sau lưng tất cả..\r\nĐể rời xa anh và bên ai,kề bên vai là ai..???\r\nLục tìm trong cơn mưa này..Lục tìm trong cơn mưa này..\r\nNụ cười em nơi đâu,đâu,đâu..\r\nNước mắt rơi,rơi..\r\nMong người về đây!\r\n\r\n\r\nCơn mưa ngang qua đã mang em đi xa nơi anh.\r\nCơn mưa ngang qua đã mang em phôi pha xa nơi anh.\r\nMột giây thôi..Ùa về một giây thôi..\r\nHỡi những giấc mơ,em mang trao anh với bao kỉ niệm.\r\nHãy nói rõ ra đi…Sao em như vậy..!!\r\nĐôi tay anh giờ này nó quá yếu mềm.\r\nKhông thể níu em trở lại về,một giây được bên em sao quá xa..Phải chăng em đã quên rồi..!!!\r\n\r\nCơn gió hãy tìm xem em ở đâu.?.Em ở đâu..??\r\nHãy nhắn em về đi,trở lại nơi em đã từng đánh rớt rơi một nụ cười.\r\nNhìn lại căn phòng sao quặn đau.\r\nTràn ngập bao nỗi buồn.\r\nMưa lại vội rơi và cướp mất em….Eh..Eh.\r\nHOOK:\r\nCơn mưa ngang qua mang em đi xa.\r\nCơn mưa ngang qua khiến em phôi pha.\r\nTim anh nghẹn ngào,tìm giấc mơ ngày nào…Uh..Ehhhh!\r\nSau cơn mưa anh bỗng thấy đau hơn.\r\nKhi tim em ra đi quên đi một bóng hình.\r\nXin người trở về…\r\nNíu em trở về..!!!Oh.",
			song_duration: "03:34",
			author_name: "Sơn tùng MTP",
			artist_id: 5,
			artist_name: "Sơn tùng MTP",
			category_id: 1,
			created_at: "2022-10-20",
			updated_at: "2022-11-22",
		},
		{
			id: 3,
			song_name: "Chàng trai đang thất tình",
			song_cover: "song_changtraidangthattinh.jpg_1666275758163.jpeg",
			song_path: "song_ChangTraiDangThatTinh-DatG,Binz.mp3_1666275758166.mpeg",
			song_listened: 5,
			song_lyric:
				"Vers 1:\r\n\r\nCó lẽ em cũng đã quên anh rồi (đã quên anh rồi)\r\n\r\nCó lẽ em cũng chẳng cần phải nhớ (chẳng cần phải nhớ đâu… em)\r\n\r\nGóc cuối bên hiên nhà, Chiều nay cũng đã có mưa\r\n\r\nGiờ khóc làm gì, khi em cười (khi… em… cười)\r\n\r\nCó lẽ yêu thương bao lâu này giờ buông, là buông\r\n\r\nCó lẽ em cứ, vương vấn mãi, câu chuyện buồn (mãi câu… chuyện buồn)\r\n\r\nĐến hết đêm nay thôi, ngày mai lòng này sẽ khác\r\n\r\nNhưng không, tim anh vẫn nhớ mùa đông\r\n\r\nVậy giờ anh làm sao, làm sao có thể quên yêu thương ngày nào\r\n\r\nNhững ngày anh có em, vòng tay đơn sơ ấm áp\r\n\r\nVậy giờ đây thì sao, thì sao em ở đâu khi anh 1 mình\r\n\r\nTình yêu đầu tiên khắc sâu, dưới gốc hiên nhà có mưa..\r\n\r\nRap :\r\n\r\nBây giờ anh làm sao anh làm sao\r\n\r\nVùi chôn, anh vùi chôn trong kỉ niệm\r\n\r\nMây đen trôi, mây đen vẫn kéo đến\r\n\r\nBão giông thêm bão giông cứ thay phiên\r\n\r\nTrả lại anh bờ môi ấm, Trả lại anh đôi mắt hiền\r\n\r\nMới hôm qua còn an nhiên\r\n\r\nHôm nay là như vậy làm sao anh xoay chuyển đây\r\n\r\nAnh đã từng ngã vì nụ cười xinh\r\n\r\nTa đã từng gọi nhau là người tình\r\n\r\nTa đã từng coi nhau là hạnh phúc, có lẽ nỗi buồn luôn là điều ngoài dự tính\r\n\r\nPhố đã yên giờ thêm lắng, hàng cây đã không còn xen nắng\r\n\r\nCơn mưa sẽ không còn ấm êm ly cafe của anh càng thêm đường càng thêm đắng\r\n\r\nĐừng nói với anh ta đã chưa từng đậm sâu\r\n\r\nNói với anh ta cần nhau\r\n\r\nNói với anh ta sẽ hạnh phúc nhưng không cần phải qua thêm một lần đau\r\n\r\nĐừng làm nhớ thương kia dần lấp lối\r\n\r\nEm đừng làm căn phòng anh đầy ấp khói\r\n\r\nEm đừng biến nụ hôn này trở thành dĩ vãng\r\n\r\nThôi đừng để lời hứa ta trao phải hấp hối Nơi đây..\r\n\r\nmưa vẫn còn rơi rơi, hàng cây đó càng chơi vơi\r\n\r\nYêu dấu ngày cũ đó thôi cứ để cuốn trôi đi\r\n\r\nĐâu còn nước mắt chắc là khô luôn cả đôi mi\r\n\r\nEm vẫn luôn vô tư, thứ ta xa nhau vẫn vô lý\r\n\r\nUống mà vẫn không say rượu kia hẳng là vô vị\r\n\r\nKhông em ở quanh đây anh như kẻ đang vô tri\r\n\r\nChúng ta làm nhau đau ok chắc là cố ý\r\n\r\nĐi ngang qua nhau vậy như ta chưa từng có gì\r\n\r\nVers 2 :\r\n\r\nCó lẽ yêu thương bao lâu này giờ buông, là buông\r\n\r\nCó lẽ em cứ, vương vấn mãi, câu chuyện buồn (mãi câu… chuyện buồn)\r\n\r\nĐến hết đêm nay thôi, ngày mai lòng này sẽ khác\r\n\r\nNhưng không, tim anh vẫn nhớ mùa đông\r\n\r\nVậy giờ anh làm sao, làm sao có thể quên yêu thương ngày nào\r\n\r\nNhững ngày anh có em, vòng tay đơn sơ ấm áp\r\n\r\nVậy giờ đây thì sao, thì sao em ở đâu khi anh 1 mình\r\n\r\nTình yêu đầu tiên khắc sâu, dưới gốc hiên nhà có mưa…",
			song_duration: "04:45",
			author_name: "Đạt G",
			artist_id: 4,
			artist_name: "Đạt G ft Binz",
			category_id: 1,
			created_at: "2022-10-20",
			updated_at: "2022-11-14",
		},
		{
			id: 2,
			song_name: "Crooked",
			song_cover: "song_TUN02973.jpg_1666260630440.jpg",
			song_path: "song_Crooked-GDRAGON.mp3_1666260632096.mpeg",
			song_listened: 3,
			song_lyric:
				"[English:]\r\n\r\nNothing ever lasts forever\r\nIn the end, you changed\r\nThere is no reason, no sincerity\r\nTake away such a thing as love\r\nTonight, I’ll be crooked\r\n\r\nLeave me alone\r\nI was alone anyway\r\nI have no one, everything is meaningless\r\nTake away the sugar-coated comfort\r\nTonight, I’ll be crooked\r\n\r\nI scream and get dizzy\r\nI vent out of boredom to other couples\r\nI start fights for no reason like a town gangster\r\nSometimes, I purposely shake my leg, crookedly\r\nThe main characters of the movie called this world is you and me\r\nA lonely island, lost and wandering\r\nThe empty streets are filled with those who are alone\r\nUnlike my heart, the weather is so damn nice\r\n\r\nI used to believe in you alone and I was happy\r\nBut like a joke, I am left alone\r\nYou used to promise me with your pinky finger\r\nBut in the end\r\n\r\nNothing ever lasts forever\r\nIn the end, you changed\r\nThere is no reason, no sincerity\r\nTake away such a thing as love\r\nTonight, I’ll be crooked\r\n\r\nLeave me alone\r\nI was alone anyway\r\nI have no one, everything is meaningless\r\nTake away the sugar-coated comfort\r\nTonight, I’ll be crooked\r\n\r\nI’ll put on thick eyeliner, use a whole can of hairspray\r\nLeather pants, leather jacket with a frown\r\nI want to hide my pain and become even more crooked\r\nSo you can feel sorry, I’ll spit toward the sky\r\nYou’re scared of my crude words and my rough eyes\r\nBut actually, I’m afraid, I want to go back but I have nowhere to go\r\nI want to love but no one to love, what am I supposed to do?\r\nI can’t turn it back\r\n\r\nI used to believe in you alone and I was happy\r\nBut like a joke, I am left alone\r\nYou used to promise me with your pinky finger\r\nBut in the end\r\n\r\nNothing ever lasts forever\r\nIn the end, you changed\r\nThere is no reason, no sincerity\r\nTake away such a thing as love\r\nTonight, I’ll be crooked\r\n\r\nLeave me alone\r\nI was alone anyway\r\nI have no one, everything is meaningless\r\nTake away the sugar-coated comfort\r\nTonight, I’ll be crooked\r\n\r\nWill you not say anything for me tonight?\r\nI didn’t know being alone would be this hard (I miss you)\r\nWill you be my friend tonight?\r\nOn this good day, this beautiful day, this day where I miss you\r\nTonight, I’ll be crooked\r\n\r\n[Romanized:]\r\n\r\nYeongwonhan geon jeoldae eobseo\r\nGyeolguge neon byeonhaetji\r\nIyudo eobseo jinsimi eobseo\r\nSarang gateun sori ttawin jibeo chyeo\r\nOneulbameun ppittakhage\r\n\r\nNaebeoryeodwo\r\nEochapi nan honjayeotji\r\nAmudo eobseo da uimi eobseo\r\nSatang ballin wiro ttawin jibeo chyeo\r\nOneulbameun ppittakhage\r\n\r\nBeoreokbeoreok sorichyeo naneun hyeongijeung\r\nNae simsimpuri hwa puri sangdaeneun dareun yeonindeul\r\nGwaenhi sibi georeo dongne yangachicheoreom\r\nGakkeum nan ppittakhage darireul ilbureo jeoreo\r\nI sesangiran yeonghwa sok juingongeun neowana\r\nGal goseul irko hemaeneun oeroun jeo seom hana\r\nTeongteong bin gilgeorireul gadeuk chaeun gireogideul\r\nNae mamgwa dalli nalssineun cham deoreopgedo joha\r\n\r\nNeo hana mitgo manyang haengbokhaesseotdeon naega\r\nUseupge namgyeojyeosseo\r\nSaekkisongarak geolgo maengsehaesseotdeon nega\r\nGyeolgugen\r\n\r\nYeongwonhan geon jeoldae eobseo\r\nGyeolguge neon byeonhaetji\r\nIyudo eobseo jinsimi eobseo\r\nSarang gateun sori ttawin jibeo chyeo\r\nOneulbameun ppittakhage\r\n\r\nNaebeoryeodwo\r\nEochapi nan honjayeotji\r\nAmudo eobseo da uimi eobseo\r\nSatang ballin wiro ttawin jibeo chyeo\r\nOneulbameun ppittakhage\r\n\r\nJiteun airain geutgo seupeurei han tong da sseugo\r\nGajukbaji, gajukjaket geolchigo insang sseugo\r\nApeumeul sumgin chae apeuro deo bittureojillae\r\nNega mianhaejige haneureda chimeul kak\r\nTubakhaejin nae maltuwa geochireojin nunbichi museowo neo\r\nSireun na itji duryeowojyeo doragagopeunde gal de eopgo\r\nSaranghagopeunde sangdae eopgo mwol eojjeorago\r\nDori kil su eopdeorago\r\n\r\nNeo hana mitgo manyang haengbokhaesseotdeon naega\r\nUseupge namgyeojyeosseo\r\nSaekkisongarak geolgo maengsehaesseotdeon nega\r\nGyeolgugen\r\n\r\nYeongwonhan geon jeoldae eobseo\r\nGyeolguge neon byeonhaetji\r\nIyudo eobseo jinsimi eobseo\r\nSarang gateun sori ttawin jibeo chyeo\r\nOneulbameun ppittakhage\r\n\r\nNaebeoryeodwo\r\nEochapi nan honjayeotji\r\nAmudo eobseo da uimi eobseo\r\nSatang ballin wiro ttawin jibeo chyeo\r\nOneulbameun ppittakhage\r\n\r\nOneulbameun nareul wihae amu mal marajullaeyo\r\nHonjain ge na ireoke himdeul jul mollanneunde (geudaega bogo sipeo)\r\nOneulbamman nareul wihae chinguga doeeojullaeyo\r\nI joheun nal areumdaun nal nega geuriun nal\r\nOneulbameun ppittakhage",
			song_duration: "03:44",
			author_name: "G-Dragon",
			artist_id: null,
			artist_name: "G-Dragon",
			category_id: 2,
			created_at: "2022-10-20",
			updated_at: "2022-11-15",
		},
		{
			id: 8,
			song_name: "Muộn rồi mà sao còn",
			song_cover: "song_muonroimasaocon.jpg_1668915908035.jpeg",
			song_path: "song_MuonRoiMaSaoCon-SonTungMTP.mp3_1668915908036.mpeg",
			song_listened: 1,
			song_lyric:
				"Muộn rồi mà sao còn\r\nNhìn lên trần nhà rồi quay ra lại quay vào\r\nNằm trằn trọc vậy đến sáng mai\r\nÔm tương tư nụ cười của ai đó\r\nLàm con tim ngô nghê như muốn khóc oà\r\nVắt tay lên trên trán mơ mộng\r\nĐược đứng bên em trong nắng xuân hồng\r\nMột giờ sáng\r\nTrôi qua trôi nhanh kéo theo ưu phiền miên man\r\nÂm thầm gieo tên em vẽ lên hi vọng\r\nĐúng là yêu thật rồi còn không thì hơi phí này\r\nCứ thế loanh quanh loanh quanh loanh quanh lật qua lật lại hai giờ\r\nNhững ngôi sao trên cao\r\nLà người bạn tâm giao\r\nLắng nghe anh luyên thuyên về một tình đầu đẹp tựa chiêm bao\r\nCó nghe thôi đã thấy ngọt ngào đủ biết anh si mê em nhường nào\r\nÍt khi văn thơ anh dạt dào bụng đói nhưng vui quên luôn cồn cào\r\nNắm đôi tay kiêu sa\r\nĐược một lần không ta\r\nNghĩ qua thôi con tim trong anh đập tung lên rung nóc rung nhà\r\nHoá ra yêu đơn phương một người\r\nHoá ra khi tơ vương một người\r\nBa giờ đêm vẫn ngồi cười\r\nCứ ôm anh đi ôm anh đi ôm anh đi ôm anh đi\r\nÔm trong cơn mơ trong cơn mơ trong cơn mơ ôm trong cơn mơ\r\nCó thế cũng khiến anh vui điên lên\r\nNgỡ như em đang bên\r\nChắp bút đôi ba câu thơ ngọt ngào\r\nMuốn em đặt tên\r\nCứ ôm anh đi ôm anh đi ôm anh đi ôm anh đi\r\nÔm trong giấc mơ trong cơn mơ trong cơn mơ ôm trong cơn mơ\r\nYêu đến vậy thôi phát điên rồi làm sao giờ\r\nChịu\r\nĐêm nay không ngủ tay kê lên tủ\r\nMiên man anh tranh thủ\r\nChơi vơi suy tư bao nhiêu cho đủ\r\nYêu em ngu ngơ mình tôi\r\nYêu không quan tâm ngày trôi\r\nYêu ánh mắt bờ môi\r\nYêu đơn phương vậy thôi\r\nLại còn chối\r\nCon tim thẹn thùng đập lạc lối liên hồi\r\nĐừng chày cối\r\nMiệng cười cả ngày vậy là chết toi rồi\r\nNgày càng nhiều thêm\r\nTình yêu cho em ngày càng nhiều thêm\r\nMuốn nắm đôi bàn tay đó một lần\r\nDu dương chìm sâu trong từng câu ca dịu êm\r\nNhững ngôi sao trên cao là người bạn tâm giao\r\nLắng nghe anh luyên thuyên về một tình đầu đẹp tựa chiêm bao\r\nCó nghe tôi đã thấy ngọt ngào đủ biết anh si mê em nhường nào\r\nÍt khi văn thơ anh dạt dào bụng đói nhưng vui quên luôn cồn cào\r\nNắm đôi tay kiêu sa\r\nĐược một lần không ta\r\nNghĩ qua thôi con tim trong anh đập tung lên rung nóc rung nhà\r\nHoá ra yêu đơn phương một người\r\nHoá ra khi tơ vương một người\r\nBa giờ đêm vẫn ngồi cười\r\nCứ ôm anh đi ôm anh đi ôm anh đi ôm anh đi\r\nÔm trong cơn mơ trong cơn mơ trong cơn mơ ôm trong cơn mơ\r\nCó thế cũng khiến anh vui điên lên\r\nNgỡ như em đang bên\r\nChắp bút đôi ba câu thơ ngọt ngào\r\nMuốn em đặt tên\r\nCứ ôm anh đi ôm anh đi ôm anh đi ôm anh đi\r\nÔm trong giấc mơ trong cơn mơ trong cơn mơ ôm trong cơn mơ\r\nYêu đến vậy thôi phát điên rồi làm sao giờ\r\nEm xinh như một thiên thần\r\nNhư một thiên thần\r\nNhư một thiên thần\r\nNgỡ như em là thiên thần\r\nXinh như một thiên thần\r\nNhư một thiên thần\r\nEm xinh như một thiên thần\r\nNhư một thiên thần\r\nNhư một thiên thần\r\nNgỡ như em là thiên thần\r\nNgỡ như ngỡ như\r\nNgỡ như ngỡ như ngỡ như\r\nCứ ôm anh đi ôm anh đi ôm anh đi ôm anh đi\r\nÔm trong cơn mơ trong cơn mơ trong cơn mơ ôm trong cơn mơ\r\nCó thế cũng khiến anh vui điên lên\r\nNgỡ như em đang bên\r\nChắp bút đôi ba câu thơ ngọt ngào\r\nMuốn em đặt tên\r\nCứ ôm anh đi ôm anh đi ôm anh đi ôm anh đi\r\nÔm trong giấc mơ trong cơn mơ trong cơn mơ ôm trong cơn mơ\r\nYêu đến vậy thôi phát điên rồi làm sao giờ",
			song_duration: "04:35",
			author_name: "Duy Duc Nguyen",
			artist_id: 5,
			artist_name: "Sơn Tùng MTP",
			category_id: 1,
			created_at: "2022-11-20",
			updated_at: "2022-11-20",
		},
		{
			id: 9,
			song_name: "Thatxx",
			song_cover: "song_thatxx.jpg_1668918152432.jpeg",
			song_path: "song_ThatXx-GDRAGON.mp3_1668918152433.mpeg",
			song_listened: 1,
			song_lyric:
				"우연히 길을 걷다 네 남잘 봤어(Yea I saw him)\r\n혹시나 했던 내 예감이 맞았어 (I told you)\r\n네가 준 반지를 빼고 한쪽엔 팔짱을 끼고\r\n그냥 여기까지만 말할게 (I don't wanna hurt you)\r\n근데 오히려 너는 내게 화를 내 (Why?)\r\n그는 절대로 그럴 리가 없대 (Sure you're right)\r\n나는 네 눈칠 살피고 내가 잘 못 본 거라고\r\n그래 널 위해 거짓말할게 (I'm sorry)\r\nOh 날 몰라주는 네가 미워\r\n이 기다림이 싫어\r\n그 손 이제 놓으라고\r\n네가 슬퍼할 때면 나는\r\n죽을 것만 같다고 baby\r\n그 새끼보다 내가 못한 게 뭐야\r\n도대체 왜 나는 가질 수 없는 거야\r\n그 새끼는 너를 사랑하는 게 아냐\r\n언제까지 바보같이 울고만 있을 거야\r\n넌 그 사람 얘길 할 땐 행복해 보여 (You look happy)\r\n이렇게라도 웃으니 좋아 보여 (I'm happy)\r\n그를 정말 사랑한다고\r\n마치 영원할거라고 믿는 네 모습이\r\nI don't know what to say no mo'\r\n너의 친구들 모두 그를 잘 알아 (yup they know)\r\n뻔히 다 보이는걸 너만 왜 못 봐 (It's you)\r\nThey say love is blind\r\nOh baby you so blind\r\n제발 헤어지기를 바랄게\r\nOh 날 몰라주는 네가 미워\r\n이 기다림이 싫어\r\n그 손 이제 놓으라고\r\n네가 슬퍼할 때면 나는\r\n죽을 것만 같다고 baby\r\n그 새끼보다 내가 못한 게 뭐야\r\n도대체 왜 나는 가질 수 없는 거야\r\n그 새끼는 너를 사랑하는 게 아냐\r\n언제까지 바보같이 울고만 있을 거야\r\nYeah, 비싼 차에 예쁜 옷\r\n고급 레스토랑 넌 잘 어울려\r\n하지만 네 옆 그 X는 정말 아냐\r\n너랑은 안 어울려\r\n네 앞에서 거짓미소를 지으며\r\n네 볼과 머릿결을 만지며\r\n속으론 분명 다른 여자를 생각해\r\n어쩜 그럴 수 있니 죄 같애\r\n네가 흘린 눈물만큼 내가 더 잘해줄게 baby\r\n너 혼자 감당할 아픔 내게도 좀 나눠줄래 baby\r\n나 좀 봐달라고 그대 사랑이 왜 나란걸 몰라\r\n왜 너만 몰라\r\n그 새끼보다 내가 못한 게 뭐야\r\n도대체 왜 나는 가질 수 없는 거야\r\n그 새끼는 너를 사랑하는 게 아냐\r\n언제까지 바보같이 울고만 있을 거야\r\n그 새끼보다 내가 못한 게 뭐야\r\n도대체 왜 나는 가질 수 없는 거야\r\n그 새끼는 너를 사랑하는 게 아냐\r\n언제까지 바보같이 울고만 있을 거야",
			song_duration: "03:19",
			author_name: "G-dragon",
			artist_id: 6,
			artist_name: "G-dragon",
			category_id: 2,
			created_at: "2022-11-20",
			updated_at: "2022-11-20",
		},
		{
			id: 12,
			song_name: "abcdefu",
			song_cover: "song_abcdefu.jpg_1668927866469.jpeg",
			song_path: "song_abcdefu - GAYLE Royal the Serpent.mp3_1668927866469.mpeg",
			song_listened: 1,
			song_lyric:
				"Fuck you and your mom and your sister and your job\r\nAnd your broke-ass car and that shit you call art\r\nFuck you and your friends that I'll never see again\r\nEverybody but your dog, you can all fuck off\r\nI swear I meant to mean the best when it ended\r\nEven tried to bite my tongue when you start shit\r\nNow you're textin' all my friends asking questions\r\nThey never even liked you in the first place\r\nDated a girl that I hate for the attention\r\nShe only made it two days, what a connection\r\nIt's like you'd do anything for my affection\r\nYou're goin' all about it in the worst ways\r\nI was into you, but I'm over it now\r\nAnd I was tryin' to be nice\r\nBut nothing's getting through, so let me spell it out\r\nA-B-C-D-E, F-U\r\nAnd your mom and your sister and your job\r\nAnd your broke-ass car and that shit you call art\r\nFuck you and your friends that I'll never see again\r\nEverybody but your dog, you can all fuck off\r\nNah, nah, nah, nah, nah, nah, nah, nah\r\nA-B-C-D-E, F-U\r\nYou said you just needed space and so I gave it\r\nWhen I had nothin' to say you couldn't take it\r\nTold everyone I'm a bitch, so I became it\r\nAlways had to put yourself above me\r\nI was into you, but I'm over it now\r\nAnd I was tryin' to be nice\r\nBut nothing's getting through, so let me spell it out\r\nA-B-C-D-E, F-U\r\nAnd your mom and your sister and your job\r\nAnd your craigslist couch and the way your voice sounds\r\nFuck you and your friends that I'll never see again\r\nEverybody but your dog, you can all fuck off\r\nNah, nah, nah, nah, nah, nah, nah, nah\r\nA-B-C-D-E, F-U\r\nNah, nah, nah, nah, nah, nah, nah, nah\r\nA-B-C-D-E, F-U\r\nAnd your mom and your sister and your job\r\nAnd your broke-ass car and that shit you call art\r\nFuck you and your friends that I'll never see again\r\nEverybody but your dog, you can all fuck off",
			song_duration: "02:49",
			author_name: "Gayle",
			artist_id: 6,
			artist_name: "Gayle",
			category_id: 3,
			created_at: "2022-11-20",
			updated_at: "2022-11-22",
		},
		{
			id: 10,
			song_name: "Sau này",
			song_cover: "song_saunay.jpg_1668927280607.jpeg",
			song_path: "song_SauNayHuLai-LuuNhuocAnh.mp3_1668927280607.mpeg",
			song_listened: 0,
			song_lyric:
				"Hòu lái\r\nWǒ zǒng suàn xué huì le rú hé qù ài\r\nKě xī nǐ zǎo yǐ yuǎn qù\r\nXiāo shī zài rén hǎi\r\n\r\n\r\nHòu lái\r\nZhōng yú zài yǎn lèi zhōng míng bai\r\nYǒu xiē rén yī dàn cuò guò jiù bù zài\r\n\r\n\r\nZhī zi huā bái huā bàn\r\nLuò zài wǒ lán sè bǎi zhě qún shàng\r\nÀi nǐ nǐ qīng shēng shuō\r\nWǒ dī xià tou wén jiàn yī zhèn fēn fāng\r\nNà ge yǒng héng de yè wǎn\r\n\r\n\r\nShí qī suì zhòng xià\r\nNǐ wěn wǒ de nà ge yè wǎn\r\nRàng wǒ wǎng hòu de shí guāng\r\nMěi dāng yǒu gǎn tàn\r\nZǒng xiǎng qǐ dāng tiān de xīng guāng\r\nNà shí hou de ài qíng\r\nWèi shén me jiù néng nà yàng jiǎn dān\r\nÉr yòu shì wèi shén me rén nián shǎo shí\r\nYī dìng yào ràng shēn ài de rén shòu shāng\r\n\r\n\r\nZài zhè xiāng shì de shēn yè li\r\nYě zài jìng jìng zhuī huǐ gǎn shāng\r\nRú guǒ dāng shí wǒ men néng bù nà me jué jiàng\r\nXiàn zài yě bù nà me yí hàn\r\nNǐ dōu rú hé huí yì wǒ\r\nDài zhe xiào huò shì hěn chén mò\r\nZhè xiē nián lái yǒu méi yǒu rén néng ràng nǐ bù jì mò\r\n\r\n\r\nYǒng yuǎn bù huì zài chóng lái\r\nYǒu yī gè nán hái ài zhe nà ge nǚ hái",
			song_duration: "05:41",
			author_name: "Lưu Nhược Anh",
			artist_id: 4,
			artist_name: "Lưu Nhược Anh",
			category_id: 3,
			created_at: "2022-11-20",
			updated_at: "2022-11-20",
		},
		{
			id: 11,
			song_name: "Crying Over You",
			song_cover: "song_cryingoveryou.jpg_1668927459720.jpeg",
			song_path: "song_CryingOverYou-JustaTeeBinz.mp3_1668927459720.mpeg",
			song_listened: 0,
			song_lyric:
				"I'm crying over you bae\r\nI'm crying over you bae, bae, bae\r\nSẽ có những đớn đau không thành lời\r\nSẽ có những vết thương theo một đời\r\nDù mình đã cắn thật chặt đôi môi sau bao điều mặn đắng\r\nNhưng sao hôm nay con tim anh quên rằng anh là người mạnh mẽ vô cùng\r\nCó lẽ đã quá lâu cho một người\r\nGiấu hết yếu đuối bên trong nụ cười\r\nRồi vội vàng nhắm mắt chậm lại đôi chân đi sau thời gian cùng những vỡ tan\r\nI'm crying over you bae\r\nI'm crying over you bae\r\nKhi anh chẳng thể giữ mãi những cảm xúc vô tình bấy lâu\r\nI'm crying over you\r\nChơ vơ đơn côi, bên những thứ xa xôi\r\nI'm crying over you bae\r\nI'm crying over you bae\r\nChe đi một màu trắng xoá lăn dài xuống nơi gò má này\r\nI'm crying over you\r\nChơ vơ đơn côi, bên những thứ xa xôi\r\nI'm crying over...\r\nChưa bao giờ em thấy anh khóc\r\nĐâu có nghĩa là nước mắt anh không rơi đâu\r\nChỉ là không muốn em biết anh yếu đuối\r\nNhưng em đừng để tâm nhé, anh không sao đâu\r\nVà giờ trên mắt anh lại là những giọt lệ\r\nYêu em, anh đã quên mất, anh từng mạnh mẽ\r\nĐừng, xa anh để cho nỗi nhớ làm nhoà đi hết bức tranh anh từng vẽ\r\nVẫn đó màu mắt xanh còn ít bình yên\r\nVáy trắng vẫn còn tinh khiết\r\nNhưng con tim em đã lạnh hơn nhiều lắm\r\nTình yêu anh vẫn chưa đủ để sưởi ấm cho con tim đã trải qua quá nhiều nỗi đau, anh biết chứ\r\nEm cần nhiều hơn thế, anh biết chứ\r\nAnh nào muốn nước mắt anh rơi, no\r\nAnh đâu muốn hai đứa hai nơi đâu\r\nVì vậy anh ghét con người yếu đuối trong anh\r\nNhưng bên em ranh giới đó rất mong manh\r\nEm cho anh cười, cho anh khóc\r\nThay đổi nhanh trong phúc chốc\r\nCho anh buồn cho anh vui\r\nĐưa anh qua từng cung bậc của cảm xúc, em...\r\nVà khi đi đến nơi nỗi đau em buông tay anh nơi đây, chân lạc giữa đêm, babe\r\nYou don't know everytnight\r\nI'm crying over you bae (yea)\r\nI'm crying over you bae\r\nKhi anh chẳng thể giữ mãi những cảm xúc vô tình bấy lâu\r\nI'm crying over you\r\nChơ vơ đơn côi, bên những thứ xa xôi\r\nI'm crying over you bae\r\nI'm crying over you bae\r\nChe đi một màu trắng xoá lăn dài xuống nơi gò má này\r\nI'm crying over you\r\nChơ vơ đơn côi, bên những thứ xa rồi\r\nI'm crying over\r\nAnh không biết trước khi cơn mưa đến\r\nMưa vô tình (Tí tách tí tách rơi)\r\nĐể đôi vai ngấm tận cùng\r\nQuên hết lạnh lùng\r\nAnh buông mình theo cảm xúc\r\nCứ mặc mưa hay là em làm tan vỡ baby alright (alright)\r\nI'm alright baby, i'm alright can you feel that, baby\r\nVị mặn chia đôi\r\nThay cho bao ngọt ngào đã trôi qua\r\nĐôi môi anh bây giờ đắng lắm\r\nNhưng anh đành phải nuốt thôi vì mất em rồi\r\nNước mắt không giúp anh được nhiều\r\nKhông giúp anh lấy lại những thứ anh từng yêu, no\r\nNếu muốn khóc cho hết đi nỗi buồn\r\nVì ít nhất anh biết ta đã một lần yêu nhau\r\nVà những phút yếu mềm anh cần lắm\r\nMột cái ôm thật chặt từ đôi tay\r\nNhững lúc tuyệt vọng anh cần lắm\r\nGiọng em nói \"ay, are you ok?\" (Uhm)\r\nEm, giờ nơi đây tối lắm\r\nEm, giờ tim anh rối lắm\r\nAnh cố cười nhưng nước mắt vẫn cứ tuôn thôi\r\nLàm đôi tay anh có lúc như muốn buông xuôi\r\nTất cả\r\nNhưng anh nhớ rằng\r\nEm từng nói là\r\nChỉ cần một người giữ, thì ta vẫn còn hy vọng\r\nVậy giờ hy vọng của anh đang nơi đâu?\r\nBabe don't you know\r\nI'm crying over you bae\r\nI'm crying over you bae\r\nKhi anh chẳng thể giữ mãi những cảm xúc, vô tình bấy lâu\r\nI'm crying over you\r\nChơ vơ đơn côi, bên những thứ xa xôi\r\nI'm crying over you bae\r\nI'm crying over you bae\r\nChe đi một màu trắng xoá lăn dài xuống nơi gò má này\r\nVì ngày đó anh chưa bao giờ muốn em nhìn\r\nI'm crying over\r\nI'm crying over\r\nI'm crying over\r\nI'm crying over\r\nChơ vơ đơn côi, bên những thứ đã qua rồi\r\nI'm crying over\r\nI'm crying over\r\nI'm crying over\r\nChe đi một màu trắng xoá lăn dài xuống nơi gò má này\r\nI'm crying over you\r\nChơ vơ đơn côi, bên những thứ xa xôi\r\nI'm crying over",
			song_duration: "05:39",
			author_name: "Justatee",
			artist_id: 4,
			artist_name: "Binz ft Justatee",
			category_id: 1,
			created_at: "2022-11-20",
			updated_at: "2022-11-20",
		},
	];
	return res.status(200).send({ success: true, message: data });
});
app.put("/song/updatelistened", async (req, res) => {
	return res.status(200).send({ success: true, message: "Successfully" });
});
app.get("/song/getchart/:category_name", async (req, res) => {
	let data;
	const categoryName = req.params.category_name.toLowerCase();
	switch (categoryName) {
		case "vpop":
			data = [
				{
					id: 5,
					song_name: "Khóc",
					song_cover: "song_dong-nhi-khoc-1736.jpg_1667381263681.jpeg",
					song_path: "song_Khoc-DongNhi.mp3_1667381268065.mpeg",
					song_listened: 8,
					song_lyric:
						"Tình tan vỡ\r\nMột mình bước trong đêm\r\nTìm lại những giấc mơ\r\nXưa anh của ngày xưa ấm êm\r\nNào ngờ cơn gió\r\nĐã mang sương đến vây kín\r\nChe lấp ánh sáng nơi chân trời\r\nNước mắt tràn bờ mi\r\nLòng đau xót nghe trái tim khóc trong lặng câm\r\nMà vì sao tình em giờ đây vẫn mãi chờ người\r\nChờ tháng năm yêu ngày xưa giờ mong mãi\r\nNgày anh đi trời mưa phùn rơi thấm ướt đường dài\r\nĐể em ngồi lặng nhìn theo bóng anh\r\nLệ cay khóe vì một người đã ra đi không trở về\r\nNhưng nước mắt đó cũng chỉ làm vết thương thêm đau\r\nVì sao em lại khóc\r\nVì sao em lại nhớ\r\nDẫu biết anh chẳng còn như lúc xưa\r\nLệ cay khóe vì một người đã đi mang theo giấc mơ\r\nNơi đó chôn giấu ký ức cùng tháng năm êm đềm\r\nVì anh đã đi mãi\r\nVì em còn yêu anh\r\nDẫu biết anh chẳng còn nhớ đến em\r\nGiọt sầu hờn cay\r\nGiọt sầu lệ tuôn\r\nGiọt buồn lệ rơi nào ai muốn\r\nSao không cho bao nhiêu yêu thương kia nằm xuống kia\r\nĐể rồi cuốn xa\r\nKhi đôi môi nhạt nhoà giấc mơ dấu vết tình buồn ta\r\nDù cách xa nhói lòng\r\nDù biết nhớ hoài công\r\nKhông gian bao la mênh mông mang đi hoà tan nước mắt trong em\r\nKhóc âm thầm mưa rơi\r\nĐêm sầu đơn côi\r\nSao tim em vẫn chở một nỗi sầu bơ vơ\r\nDù biết anh sẽ không về đâu\r\nVì bao nhiêu lời thề đầu\r\nEm chôn sâu vào trong nỗi nhớ tình đầu rồi\r\nĐành khóc vậy thôi\r\nĐành khóc vậy thôi\r\nThế sao không quên anh đi\r\nCho bao nhiêu nước mắt bao nhiêu đau thương\r\nKhông còn rơi trên bờ mi héo úa\r\nVì anh không như lời anh hứa\r\nAnh đã không như ngày xưa\r\nTay trong tay vai kề vai trên con đường về đón đưa\r\nThì quên nhau đi được chưa\r\nVì anh là thế đó\r\nAnh như gió nồng nàn bên mây rồi mây tan\r\nTình cũng tan\r\nGió vội vàng như anh xa rồi\r\nĐừng trách vì gió vô tình người ơi\r\nTình đầu giọt lệ sầu\r\nCũng khô mang theo thời gian\r\nHãy tìm lối đi riêng như anh đi tìm cuộc sống mới\r\nEm khóc để quên sầu quên anh và quên niềm đau\r\nThì xin em hãy khóc\r\nLệ cay khóe vì một người đã ra đi không trở về\r\nNhưng nước mắt đó cũng chỉ làm vết thương thêm đau\r\nVì sao em lại khóc\r\nVì sao em lại nhớ\r\nDẫu biết anh chẳng còn như lúc xưa\r\nLệ cay khóe vì một người đã đi mang theo giấc mơ\r\nNơi đó chôn giấu ký ức cùng tháng năm êm đềm\r\nVì anh đã đi mãi\r\nVì em còn yêu anh\r\nDẫu biết anh chẳng còn nhớ đến em\r\nLệ cay khoé vì một người đã ra đi không trở về\r\nNhưng nước mắt đó cũng chỉ làm vết thương thêm đau\r\nVì sao em lại khóc\r\nVì sao em lại nhớ\r\nDẫu biết anh chẳng còn như lúc xưa (dẫu biết em chẳng còn như lúc xưa)\r\nLệ cay khóe vì một người đã đi mang theo giấc mơ\r\nNơi đó chôn giấu ký ức cùng tháng năm êm đềm\r\nVì anh đã đi mãi\r\nVì em còn yêu anh\r\nDẫu biết anh chẳng còn nhớ đến em",
					song_duration: "04:42",
					author_name: "Đông Nhi",
					artist_id: null,
					artist_name: "Đông Nhi ft Rapper không tên",
					category_id: 1,
					created_at: "2022-11-02",
					updated_at: "2022-11-19",
				},
				{
					id: 1,
					song_name: "Cơn mưa ngang qua part2",
					song_cover: "song_cb2-thumb@2x.jpg_1666257355901.jpg",
					song_path: "song_ConMuaNgangQuaPart2-M-TP.mp3_1666257355901.mpeg",
					song_listened: 7,
					song_lyric:
						"Cơn mưa ngang qua…Cơn mưa ngang qua..Eh..!!\r\nLadykillah…M-tppppp..!!\r\nCan you feel me.\r\nEhhhhhhhhhhhhhhhhhhhhhh.\r\n\r\nHOOK:\r\nBỏ lại sau lưng tất cả..Bỏ lại sau lưng tất cả..\r\nĐể rời xa anh và bên ai,kề bên vai là ai..???\r\nLục tìm trong cơn mưa này..Lục tìm trong cơn mưa này..\r\nNụ cười em nơi đâu,đâu,đâu..\r\nNước mắt rơi,rơi..\r\nMong người về đây!\r\n\r\n\r\nCơn mưa ngang qua đã mang em đi xa nơi anh.\r\nCơn mưa ngang qua đã mang em phôi pha xa nơi anh.\r\nMột giây thôi..Ùa về một giây thôi..\r\nHỡi những giấc mơ,em mang trao anh với bao kỉ niệm.\r\nHãy nói rõ ra đi…Sao em như vậy..!!\r\nĐôi tay anh giờ này nó quá yếu mềm.\r\nKhông thể níu em trở lại về,một giây được bên em sao quá xa..Phải chăng em đã quên rồi..!!!\r\n\r\nCơn gió hãy tìm xem em ở đâu.?.Em ở đâu..??\r\nHãy nhắn em về đi,trở lại nơi em đã từng đánh rớt rơi một nụ cười.\r\nNhìn lại căn phòng sao quặn đau.\r\nTràn ngập bao nỗi buồn.\r\nMưa lại vội rơi và cướp mất em….Eh..Eh.\r\nHOOK:\r\nCơn mưa ngang qua mang em đi xa.\r\nCơn mưa ngang qua khiến em phôi pha.\r\nTim anh nghẹn ngào,tìm giấc mơ ngày nào…Uh..Ehhhh!\r\nSau cơn mưa anh bỗng thấy đau hơn.\r\nKhi tim em ra đi quên đi một bóng hình.\r\nXin người trở về…\r\nNíu em trở về..!!!Oh.",
					song_duration: "03:34",
					author_name: "Sơn tùng MTP",
					artist_id: 5,
					artist_name: "Sơn tùng MTP",
					category_id: 1,
					created_at: "2022-10-20",
					updated_at: "2022-11-22",
				},
				{
					id: 3,
					song_name: "Chàng trai đang thất tình",
					song_cover: "song_changtraidangthattinh.jpg_1666275758163.jpeg",
					song_path: "song_ChangTraiDangThatTinh-DatG,Binz.mp3_1666275758166.mpeg",
					song_listened: 5,
					song_lyric:
						"Vers 1:\r\n\r\nCó lẽ em cũng đã quên anh rồi (đã quên anh rồi)\r\n\r\nCó lẽ em cũng chẳng cần phải nhớ (chẳng cần phải nhớ đâu… em)\r\n\r\nGóc cuối bên hiên nhà, Chiều nay cũng đã có mưa\r\n\r\nGiờ khóc làm gì, khi em cười (khi… em… cười)\r\n\r\nCó lẽ yêu thương bao lâu này giờ buông, là buông\r\n\r\nCó lẽ em cứ, vương vấn mãi, câu chuyện buồn (mãi câu… chuyện buồn)\r\n\r\nĐến hết đêm nay thôi, ngày mai lòng này sẽ khác\r\n\r\nNhưng không, tim anh vẫn nhớ mùa đông\r\n\r\nVậy giờ anh làm sao, làm sao có thể quên yêu thương ngày nào\r\n\r\nNhững ngày anh có em, vòng tay đơn sơ ấm áp\r\n\r\nVậy giờ đây thì sao, thì sao em ở đâu khi anh 1 mình\r\n\r\nTình yêu đầu tiên khắc sâu, dưới gốc hiên nhà có mưa..\r\n\r\nRap :\r\n\r\nBây giờ anh làm sao anh làm sao\r\n\r\nVùi chôn, anh vùi chôn trong kỉ niệm\r\n\r\nMây đen trôi, mây đen vẫn kéo đến\r\n\r\nBão giông thêm bão giông cứ thay phiên\r\n\r\nTrả lại anh bờ môi ấm, Trả lại anh đôi mắt hiền\r\n\r\nMới hôm qua còn an nhiên\r\n\r\nHôm nay là như vậy làm sao anh xoay chuyển đây\r\n\r\nAnh đã từng ngã vì nụ cười xinh\r\n\r\nTa đã từng gọi nhau là người tình\r\n\r\nTa đã từng coi nhau là hạnh phúc, có lẽ nỗi buồn luôn là điều ngoài dự tính\r\n\r\nPhố đã yên giờ thêm lắng, hàng cây đã không còn xen nắng\r\n\r\nCơn mưa sẽ không còn ấm êm ly cafe của anh càng thêm đường càng thêm đắng\r\n\r\nĐừng nói với anh ta đã chưa từng đậm sâu\r\n\r\nNói với anh ta cần nhau\r\n\r\nNói với anh ta sẽ hạnh phúc nhưng không cần phải qua thêm một lần đau\r\n\r\nĐừng làm nhớ thương kia dần lấp lối\r\n\r\nEm đừng làm căn phòng anh đầy ấp khói\r\n\r\nEm đừng biến nụ hôn này trở thành dĩ vãng\r\n\r\nThôi đừng để lời hứa ta trao phải hấp hối Nơi đây..\r\n\r\nmưa vẫn còn rơi rơi, hàng cây đó càng chơi vơi\r\n\r\nYêu dấu ngày cũ đó thôi cứ để cuốn trôi đi\r\n\r\nĐâu còn nước mắt chắc là khô luôn cả đôi mi\r\n\r\nEm vẫn luôn vô tư, thứ ta xa nhau vẫn vô lý\r\n\r\nUống mà vẫn không say rượu kia hẳng là vô vị\r\n\r\nKhông em ở quanh đây anh như kẻ đang vô tri\r\n\r\nChúng ta làm nhau đau ok chắc là cố ý\r\n\r\nĐi ngang qua nhau vậy như ta chưa từng có gì\r\n\r\nVers 2 :\r\n\r\nCó lẽ yêu thương bao lâu này giờ buông, là buông\r\n\r\nCó lẽ em cứ, vương vấn mãi, câu chuyện buồn (mãi câu… chuyện buồn)\r\n\r\nĐến hết đêm nay thôi, ngày mai lòng này sẽ khác\r\n\r\nNhưng không, tim anh vẫn nhớ mùa đông\r\n\r\nVậy giờ anh làm sao, làm sao có thể quên yêu thương ngày nào\r\n\r\nNhững ngày anh có em, vòng tay đơn sơ ấm áp\r\n\r\nVậy giờ đây thì sao, thì sao em ở đâu khi anh 1 mình\r\n\r\nTình yêu đầu tiên khắc sâu, dưới gốc hiên nhà có mưa…",
					song_duration: "04:45",
					author_name: "Đạt G",
					artist_id: 4,
					artist_name: "Đạt G ft Binz",
					category_id: 1,
					created_at: "2022-10-20",
					updated_at: "2022-11-14",
				},
				{
					id: 8,
					song_name: "Muộn rồi mà sao còn",
					song_cover: "song_muonroimasaocon.jpg_1668915908035.jpeg",
					song_path: "song_MuonRoiMaSaoCon-SonTungMTP.mp3_1668915908036.mpeg",
					song_listened: 1,
					song_lyric:
						"Muộn rồi mà sao còn\r\nNhìn lên trần nhà rồi quay ra lại quay vào\r\nNằm trằn trọc vậy đến sáng mai\r\nÔm tương tư nụ cười của ai đó\r\nLàm con tim ngô nghê như muốn khóc oà\r\nVắt tay lên trên trán mơ mộng\r\nĐược đứng bên em trong nắng xuân hồng\r\nMột giờ sáng\r\nTrôi qua trôi nhanh kéo theo ưu phiền miên man\r\nÂm thầm gieo tên em vẽ lên hi vọng\r\nĐúng là yêu thật rồi còn không thì hơi phí này\r\nCứ thế loanh quanh loanh quanh loanh quanh lật qua lật lại hai giờ\r\nNhững ngôi sao trên cao\r\nLà người bạn tâm giao\r\nLắng nghe anh luyên thuyên về một tình đầu đẹp tựa chiêm bao\r\nCó nghe thôi đã thấy ngọt ngào đủ biết anh si mê em nhường nào\r\nÍt khi văn thơ anh dạt dào bụng đói nhưng vui quên luôn cồn cào\r\nNắm đôi tay kiêu sa\r\nĐược một lần không ta\r\nNghĩ qua thôi con tim trong anh đập tung lên rung nóc rung nhà\r\nHoá ra yêu đơn phương một người\r\nHoá ra khi tơ vương một người\r\nBa giờ đêm vẫn ngồi cười\r\nCứ ôm anh đi ôm anh đi ôm anh đi ôm anh đi\r\nÔm trong cơn mơ trong cơn mơ trong cơn mơ ôm trong cơn mơ\r\nCó thế cũng khiến anh vui điên lên\r\nNgỡ như em đang bên\r\nChắp bút đôi ba câu thơ ngọt ngào\r\nMuốn em đặt tên\r\nCứ ôm anh đi ôm anh đi ôm anh đi ôm anh đi\r\nÔm trong giấc mơ trong cơn mơ trong cơn mơ ôm trong cơn mơ\r\nYêu đến vậy thôi phát điên rồi làm sao giờ\r\nChịu\r\nĐêm nay không ngủ tay kê lên tủ\r\nMiên man anh tranh thủ\r\nChơi vơi suy tư bao nhiêu cho đủ\r\nYêu em ngu ngơ mình tôi\r\nYêu không quan tâm ngày trôi\r\nYêu ánh mắt bờ môi\r\nYêu đơn phương vậy thôi\r\nLại còn chối\r\nCon tim thẹn thùng đập lạc lối liên hồi\r\nĐừng chày cối\r\nMiệng cười cả ngày vậy là chết toi rồi\r\nNgày càng nhiều thêm\r\nTình yêu cho em ngày càng nhiều thêm\r\nMuốn nắm đôi bàn tay đó một lần\r\nDu dương chìm sâu trong từng câu ca dịu êm\r\nNhững ngôi sao trên cao là người bạn tâm giao\r\nLắng nghe anh luyên thuyên về một tình đầu đẹp tựa chiêm bao\r\nCó nghe tôi đã thấy ngọt ngào đủ biết anh si mê em nhường nào\r\nÍt khi văn thơ anh dạt dào bụng đói nhưng vui quên luôn cồn cào\r\nNắm đôi tay kiêu sa\r\nĐược một lần không ta\r\nNghĩ qua thôi con tim trong anh đập tung lên rung nóc rung nhà\r\nHoá ra yêu đơn phương một người\r\nHoá ra khi tơ vương một người\r\nBa giờ đêm vẫn ngồi cười\r\nCứ ôm anh đi ôm anh đi ôm anh đi ôm anh đi\r\nÔm trong cơn mơ trong cơn mơ trong cơn mơ ôm trong cơn mơ\r\nCó thế cũng khiến anh vui điên lên\r\nNgỡ như em đang bên\r\nChắp bút đôi ba câu thơ ngọt ngào\r\nMuốn em đặt tên\r\nCứ ôm anh đi ôm anh đi ôm anh đi ôm anh đi\r\nÔm trong giấc mơ trong cơn mơ trong cơn mơ ôm trong cơn mơ\r\nYêu đến vậy thôi phát điên rồi làm sao giờ\r\nEm xinh như một thiên thần\r\nNhư một thiên thần\r\nNhư một thiên thần\r\nNgỡ như em là thiên thần\r\nXinh như một thiên thần\r\nNhư một thiên thần\r\nEm xinh như một thiên thần\r\nNhư một thiên thần\r\nNhư một thiên thần\r\nNgỡ như em là thiên thần\r\nNgỡ như ngỡ như\r\nNgỡ như ngỡ như ngỡ như\r\nCứ ôm anh đi ôm anh đi ôm anh đi ôm anh đi\r\nÔm trong cơn mơ trong cơn mơ trong cơn mơ ôm trong cơn mơ\r\nCó thế cũng khiến anh vui điên lên\r\nNgỡ như em đang bên\r\nChắp bút đôi ba câu thơ ngọt ngào\r\nMuốn em đặt tên\r\nCứ ôm anh đi ôm anh đi ôm anh đi ôm anh đi\r\nÔm trong giấc mơ trong cơn mơ trong cơn mơ ôm trong cơn mơ\r\nYêu đến vậy thôi phát điên rồi làm sao giờ",
					song_duration: "04:35",
					author_name: "Duy Duc Nguyen",
					artist_id: 5,
					artist_name: "Sơn Tùng MTP",
					category_id: 1,
					created_at: "2022-11-20",
					updated_at: "2022-11-20",
				},
				{
					id: 11,
					song_name: "Crying Over You",
					song_cover: "song_cryingoveryou.jpg_1668927459720.jpeg",
					song_path: "song_CryingOverYou-JustaTeeBinz.mp3_1668927459720.mpeg",
					song_listened: 0,
					song_lyric:
						"I'm crying over you bae\r\nI'm crying over you bae, bae, bae\r\nSẽ có những đớn đau không thành lời\r\nSẽ có những vết thương theo một đời\r\nDù mình đã cắn thật chặt đôi môi sau bao điều mặn đắng\r\nNhưng sao hôm nay con tim anh quên rằng anh là người mạnh mẽ vô cùng\r\nCó lẽ đã quá lâu cho một người\r\nGiấu hết yếu đuối bên trong nụ cười\r\nRồi vội vàng nhắm mắt chậm lại đôi chân đi sau thời gian cùng những vỡ tan\r\nI'm crying over you bae\r\nI'm crying over you bae\r\nKhi anh chẳng thể giữ mãi những cảm xúc vô tình bấy lâu\r\nI'm crying over you\r\nChơ vơ đơn côi, bên những thứ xa xôi\r\nI'm crying over you bae\r\nI'm crying over you bae\r\nChe đi một màu trắng xoá lăn dài xuống nơi gò má này\r\nI'm crying over you\r\nChơ vơ đơn côi, bên những thứ xa xôi\r\nI'm crying over...\r\nChưa bao giờ em thấy anh khóc\r\nĐâu có nghĩa là nước mắt anh không rơi đâu\r\nChỉ là không muốn em biết anh yếu đuối\r\nNhưng em đừng để tâm nhé, anh không sao đâu\r\nVà giờ trên mắt anh lại là những giọt lệ\r\nYêu em, anh đã quên mất, anh từng mạnh mẽ\r\nĐừng, xa anh để cho nỗi nhớ làm nhoà đi hết bức tranh anh từng vẽ\r\nVẫn đó màu mắt xanh còn ít bình yên\r\nVáy trắng vẫn còn tinh khiết\r\nNhưng con tim em đã lạnh hơn nhiều lắm\r\nTình yêu anh vẫn chưa đủ để sưởi ấm cho con tim đã trải qua quá nhiều nỗi đau, anh biết chứ\r\nEm cần nhiều hơn thế, anh biết chứ\r\nAnh nào muốn nước mắt anh rơi, no\r\nAnh đâu muốn hai đứa hai nơi đâu\r\nVì vậy anh ghét con người yếu đuối trong anh\r\nNhưng bên em ranh giới đó rất mong manh\r\nEm cho anh cười, cho anh khóc\r\nThay đổi nhanh trong phúc chốc\r\nCho anh buồn cho anh vui\r\nĐưa anh qua từng cung bậc của cảm xúc, em...\r\nVà khi đi đến nơi nỗi đau em buông tay anh nơi đây, chân lạc giữa đêm, babe\r\nYou don't know everytnight\r\nI'm crying over you bae (yea)\r\nI'm crying over you bae\r\nKhi anh chẳng thể giữ mãi những cảm xúc vô tình bấy lâu\r\nI'm crying over you\r\nChơ vơ đơn côi, bên những thứ xa xôi\r\nI'm crying over you bae\r\nI'm crying over you bae\r\nChe đi một màu trắng xoá lăn dài xuống nơi gò má này\r\nI'm crying over you\r\nChơ vơ đơn côi, bên những thứ xa rồi\r\nI'm crying over\r\nAnh không biết trước khi cơn mưa đến\r\nMưa vô tình (Tí tách tí tách rơi)\r\nĐể đôi vai ngấm tận cùng\r\nQuên hết lạnh lùng\r\nAnh buông mình theo cảm xúc\r\nCứ mặc mưa hay là em làm tan vỡ baby alright (alright)\r\nI'm alright baby, i'm alright can you feel that, baby\r\nVị mặn chia đôi\r\nThay cho bao ngọt ngào đã trôi qua\r\nĐôi môi anh bây giờ đắng lắm\r\nNhưng anh đành phải nuốt thôi vì mất em rồi\r\nNước mắt không giúp anh được nhiều\r\nKhông giúp anh lấy lại những thứ anh từng yêu, no\r\nNếu muốn khóc cho hết đi nỗi buồn\r\nVì ít nhất anh biết ta đã một lần yêu nhau\r\nVà những phút yếu mềm anh cần lắm\r\nMột cái ôm thật chặt từ đôi tay\r\nNhững lúc tuyệt vọng anh cần lắm\r\nGiọng em nói \"ay, are you ok?\" (Uhm)\r\nEm, giờ nơi đây tối lắm\r\nEm, giờ tim anh rối lắm\r\nAnh cố cười nhưng nước mắt vẫn cứ tuôn thôi\r\nLàm đôi tay anh có lúc như muốn buông xuôi\r\nTất cả\r\nNhưng anh nhớ rằng\r\nEm từng nói là\r\nChỉ cần một người giữ, thì ta vẫn còn hy vọng\r\nVậy giờ hy vọng của anh đang nơi đâu?\r\nBabe don't you know\r\nI'm crying over you bae\r\nI'm crying over you bae\r\nKhi anh chẳng thể giữ mãi những cảm xúc, vô tình bấy lâu\r\nI'm crying over you\r\nChơ vơ đơn côi, bên những thứ xa xôi\r\nI'm crying over you bae\r\nI'm crying over you bae\r\nChe đi một màu trắng xoá lăn dài xuống nơi gò má này\r\nVì ngày đó anh chưa bao giờ muốn em nhìn\r\nI'm crying over\r\nI'm crying over\r\nI'm crying over\r\nI'm crying over\r\nChơ vơ đơn côi, bên những thứ đã qua rồi\r\nI'm crying over\r\nI'm crying over\r\nI'm crying over\r\nChe đi một màu trắng xoá lăn dài xuống nơi gò má này\r\nI'm crying over you\r\nChơ vơ đơn côi, bên những thứ xa xôi\r\nI'm crying over",
					song_duration: "05:39",
					author_name: "Justatee",
					artist_id: 4,
					artist_name: "Binz ft Justatee",
					category_id: 1,
					created_at: "2022-11-20",
					updated_at: "2022-11-20",
				},
			];
			break;
		case "kpop":
			data = [
				{
					id: 4,
					song_name: "Fiction",
					song_cover: "song_fiction.jpg_1667378906185.jpeg",
					song_path: "song_Fiction-Beast.mp3_1667378906187.mpeg",
					song_listened: 13,
					song_lyric:
						"아직 난 널 잊지 못하고 모든걸 다 믿지 못하고\r\n이렇게 널 보내지 못하고 오늘도\r\n다시 만들어볼게 우리 이야기\r\n끝나지 않게 아주 기나긴\r\n살갗을 파고 스며드는 상실감은 잠시 묻어둘게\r\n새로 써 내려가 시작은 행복하게 웃고 있는 너와 나\r\n네가 날 떠나지 못하게 배경은 출구가 없는 좁은 방 안\r\n아무렇지 않게 네게 키스하고\r\n달콤한 너의 곁을 떠나가질 못해\r\n우린 끝이라는건 없어\r\n이렇게 난 또 (fiction in fiction)\r\n잊지 못하고 (fiction in fiction)\r\n내 가슴 속에 끝나지 않을 이야길 쓰고 있어\r\n널 붙잡을게 (fiction in fiction)\r\n놓지 않을게 (fiction in fiction in fiction)\r\n끝나지 않은 너와 나의 이야기 속에서\r\n오늘도 in fiction\r\n지금 여긴 행복한 이야기들밖에 없어\r\n너무 행복한 우리 둘만의 이야기가 이렇게\r\n(현실관 다르게)\r\n써 있어 점점 채워지고 있어\r\n너는 나에게로 달려와서 안기고\r\n품 안에 안긴 너를 나는 절대 놓지 못해\r\n우린 끝이라는건 없어\r\n이렇게 난 또 (fiction in fiction)\r\n잊지 못하고 (fiction in fiction)\r\n내 가슴 속에 끝나지 않을 이야길 쓰고 있어\r\n널 붙잡을게 (fiction in fiction)\r\n놓지 않을게 (fiction in fiction in fiction)\r\n끝나지 않은 너와 나의 이야기 속에서\r\n오늘도 in fiction\r\n다시 한 번 더 말하지만\r\n지금 너는 내 옆에 있다고 그렇게 믿고 있어 난\r\n난 목적을 잃어버린 작가\r\n이 소설의 끝은 어떻게 마무리 지어야 해\r\n사랑해 사랑해 사랑해 사랑해 사랑해 이 세 글자만 써\r\n내려가 무뎌진 펜 눈물로 얼룩진 낡은 종이 위로\r\n행복할 수도 슬플 수도 없어 이 이야기는\r\n지금 난 너무나도 행복한 생각에 이야기를 쓰지만\r\n모든게 바램일 뿐이라고 여전히\r\n난 행복한걸 (fiction in fiction in fiction)\r\n우리 함께인걸 (fiction in fiction in fiction)\r\n이제 시작인걸 (fiction in fiction in fiction)\r\n끝은 없는걸 (fiction in fiction in fiction)",
					song_duration: "03:54",
					author_name: "Nhóm BEAST",
					artist_id: null,
					artist_name: "Nhóm BEAST",
					category_id: 2,
					created_at: "2022-11-02",
					updated_at: "2022-11-19",
				},
				{
					id: 2,
					song_name: "Crooked",
					song_cover: "song_TUN02973.jpg_1666260630440.jpg",
					song_path: "song_Crooked-GDRAGON.mp3_1666260632096.mpeg",
					song_listened: 3,
					song_lyric:
						"[English:]\r\n\r\nNothing ever lasts forever\r\nIn the end, you changed\r\nThere is no reason, no sincerity\r\nTake away such a thing as love\r\nTonight, I’ll be crooked\r\n\r\nLeave me alone\r\nI was alone anyway\r\nI have no one, everything is meaningless\r\nTake away the sugar-coated comfort\r\nTonight, I’ll be crooked\r\n\r\nI scream and get dizzy\r\nI vent out of boredom to other couples\r\nI start fights for no reason like a town gangster\r\nSometimes, I purposely shake my leg, crookedly\r\nThe main characters of the movie called this world is you and me\r\nA lonely island, lost and wandering\r\nThe empty streets are filled with those who are alone\r\nUnlike my heart, the weather is so damn nice\r\n\r\nI used to believe in you alone and I was happy\r\nBut like a joke, I am left alone\r\nYou used to promise me with your pinky finger\r\nBut in the end\r\n\r\nNothing ever lasts forever\r\nIn the end, you changed\r\nThere is no reason, no sincerity\r\nTake away such a thing as love\r\nTonight, I’ll be crooked\r\n\r\nLeave me alone\r\nI was alone anyway\r\nI have no one, everything is meaningless\r\nTake away the sugar-coated comfort\r\nTonight, I’ll be crooked\r\n\r\nI’ll put on thick eyeliner, use a whole can of hairspray\r\nLeather pants, leather jacket with a frown\r\nI want to hide my pain and become even more crooked\r\nSo you can feel sorry, I’ll spit toward the sky\r\nYou’re scared of my crude words and my rough eyes\r\nBut actually, I’m afraid, I want to go back but I have nowhere to go\r\nI want to love but no one to love, what am I supposed to do?\r\nI can’t turn it back\r\n\r\nI used to believe in you alone and I was happy\r\nBut like a joke, I am left alone\r\nYou used to promise me with your pinky finger\r\nBut in the end\r\n\r\nNothing ever lasts forever\r\nIn the end, you changed\r\nThere is no reason, no sincerity\r\nTake away such a thing as love\r\nTonight, I’ll be crooked\r\n\r\nLeave me alone\r\nI was alone anyway\r\nI have no one, everything is meaningless\r\nTake away the sugar-coated comfort\r\nTonight, I’ll be crooked\r\n\r\nWill you not say anything for me tonight?\r\nI didn’t know being alone would be this hard (I miss you)\r\nWill you be my friend tonight?\r\nOn this good day, this beautiful day, this day where I miss you\r\nTonight, I’ll be crooked\r\n\r\n[Romanized:]\r\n\r\nYeongwonhan geon jeoldae eobseo\r\nGyeolguge neon byeonhaetji\r\nIyudo eobseo jinsimi eobseo\r\nSarang gateun sori ttawin jibeo chyeo\r\nOneulbameun ppittakhage\r\n\r\nNaebeoryeodwo\r\nEochapi nan honjayeotji\r\nAmudo eobseo da uimi eobseo\r\nSatang ballin wiro ttawin jibeo chyeo\r\nOneulbameun ppittakhage\r\n\r\nBeoreokbeoreok sorichyeo naneun hyeongijeung\r\nNae simsimpuri hwa puri sangdaeneun dareun yeonindeul\r\nGwaenhi sibi georeo dongne yangachicheoreom\r\nGakkeum nan ppittakhage darireul ilbureo jeoreo\r\nI sesangiran yeonghwa sok juingongeun neowana\r\nGal goseul irko hemaeneun oeroun jeo seom hana\r\nTeongteong bin gilgeorireul gadeuk chaeun gireogideul\r\nNae mamgwa dalli nalssineun cham deoreopgedo joha\r\n\r\nNeo hana mitgo manyang haengbokhaesseotdeon naega\r\nUseupge namgyeojyeosseo\r\nSaekkisongarak geolgo maengsehaesseotdeon nega\r\nGyeolgugen\r\n\r\nYeongwonhan geon jeoldae eobseo\r\nGyeolguge neon byeonhaetji\r\nIyudo eobseo jinsimi eobseo\r\nSarang gateun sori ttawin jibeo chyeo\r\nOneulbameun ppittakhage\r\n\r\nNaebeoryeodwo\r\nEochapi nan honjayeotji\r\nAmudo eobseo da uimi eobseo\r\nSatang ballin wiro ttawin jibeo chyeo\r\nOneulbameun ppittakhage\r\n\r\nJiteun airain geutgo seupeurei han tong da sseugo\r\nGajukbaji, gajukjaket geolchigo insang sseugo\r\nApeumeul sumgin chae apeuro deo bittureojillae\r\nNega mianhaejige haneureda chimeul kak\r\nTubakhaejin nae maltuwa geochireojin nunbichi museowo neo\r\nSireun na itji duryeowojyeo doragagopeunde gal de eopgo\r\nSaranghagopeunde sangdae eopgo mwol eojjeorago\r\nDori kil su eopdeorago\r\n\r\nNeo hana mitgo manyang haengbokhaesseotdeon naega\r\nUseupge namgyeojyeosseo\r\nSaekkisongarak geolgo maengsehaesseotdeon nega\r\nGyeolgugen\r\n\r\nYeongwonhan geon jeoldae eobseo\r\nGyeolguge neon byeonhaetji\r\nIyudo eobseo jinsimi eobseo\r\nSarang gateun sori ttawin jibeo chyeo\r\nOneulbameun ppittakhage\r\n\r\nNaebeoryeodwo\r\nEochapi nan honjayeotji\r\nAmudo eobseo da uimi eobseo\r\nSatang ballin wiro ttawin jibeo chyeo\r\nOneulbameun ppittakhage\r\n\r\nOneulbameun nareul wihae amu mal marajullaeyo\r\nHonjain ge na ireoke himdeul jul mollanneunde (geudaega bogo sipeo)\r\nOneulbamman nareul wihae chinguga doeeojullaeyo\r\nI joheun nal areumdaun nal nega geuriun nal\r\nOneulbameun ppittakhage",
					song_duration: "03:44",
					author_name: "G-Dragon",
					artist_id: null,
					artist_name: "G-Dragon",
					category_id: 2,
					created_at: "2022-10-20",
					updated_at: "2022-11-15",
				},
				{
					id: 9,
					song_name: "Thatxx",
					song_cover: "song_thatxx.jpg_1668918152432.jpeg",
					song_path: "song_ThatXx-GDRAGON.mp3_1668918152433.mpeg",
					song_listened: 1,
					song_lyric:
						"우연히 길을 걷다 네 남잘 봤어(Yea I saw him)\r\n혹시나 했던 내 예감이 맞았어 (I told you)\r\n네가 준 반지를 빼고 한쪽엔 팔짱을 끼고\r\n그냥 여기까지만 말할게 (I don't wanna hurt you)\r\n근데 오히려 너는 내게 화를 내 (Why?)\r\n그는 절대로 그럴 리가 없대 (Sure you're right)\r\n나는 네 눈칠 살피고 내가 잘 못 본 거라고\r\n그래 널 위해 거짓말할게 (I'm sorry)\r\nOh 날 몰라주는 네가 미워\r\n이 기다림이 싫어\r\n그 손 이제 놓으라고\r\n네가 슬퍼할 때면 나는\r\n죽을 것만 같다고 baby\r\n그 새끼보다 내가 못한 게 뭐야\r\n도대체 왜 나는 가질 수 없는 거야\r\n그 새끼는 너를 사랑하는 게 아냐\r\n언제까지 바보같이 울고만 있을 거야\r\n넌 그 사람 얘길 할 땐 행복해 보여 (You look happy)\r\n이렇게라도 웃으니 좋아 보여 (I'm happy)\r\n그를 정말 사랑한다고\r\n마치 영원할거라고 믿는 네 모습이\r\nI don't know what to say no mo'\r\n너의 친구들 모두 그를 잘 알아 (yup they know)\r\n뻔히 다 보이는걸 너만 왜 못 봐 (It's you)\r\nThey say love is blind\r\nOh baby you so blind\r\n제발 헤어지기를 바랄게\r\nOh 날 몰라주는 네가 미워\r\n이 기다림이 싫어\r\n그 손 이제 놓으라고\r\n네가 슬퍼할 때면 나는\r\n죽을 것만 같다고 baby\r\n그 새끼보다 내가 못한 게 뭐야\r\n도대체 왜 나는 가질 수 없는 거야\r\n그 새끼는 너를 사랑하는 게 아냐\r\n언제까지 바보같이 울고만 있을 거야\r\nYeah, 비싼 차에 예쁜 옷\r\n고급 레스토랑 넌 잘 어울려\r\n하지만 네 옆 그 X는 정말 아냐\r\n너랑은 안 어울려\r\n네 앞에서 거짓미소를 지으며\r\n네 볼과 머릿결을 만지며\r\n속으론 분명 다른 여자를 생각해\r\n어쩜 그럴 수 있니 죄 같애\r\n네가 흘린 눈물만큼 내가 더 잘해줄게 baby\r\n너 혼자 감당할 아픔 내게도 좀 나눠줄래 baby\r\n나 좀 봐달라고 그대 사랑이 왜 나란걸 몰라\r\n왜 너만 몰라\r\n그 새끼보다 내가 못한 게 뭐야\r\n도대체 왜 나는 가질 수 없는 거야\r\n그 새끼는 너를 사랑하는 게 아냐\r\n언제까지 바보같이 울고만 있을 거야\r\n그 새끼보다 내가 못한 게 뭐야\r\n도대체 왜 나는 가질 수 없는 거야\r\n그 새끼는 너를 사랑하는 게 아냐\r\n언제까지 바보같이 울고만 있을 거야",
					song_duration: "03:19",
					author_name: "G-dragon",
					artist_id: 6,
					artist_name: "G-dragon",
					category_id: 2,
					created_at: "2022-11-20",
					updated_at: "2022-11-20",
				},
			];
			break;
		default:
			data = [
				{
					id: 7,
					song_name: "Payphone",
					song_cover: "song_payphone.jpg_1667722206608.jpeg",
					song_path: "song_Payphone-Maroon5.mp3_1667722206611.mpeg",
					song_listened: 9,
					song_lyric:
						"I'm at a payphone trying to call home\r\nAll of my change I spent on you\r\nWhere have the times gone\r\nBaby it's all wrong, where are the plans we made for two?\r\n\r\nYeah, I, I know it's hard to remember\r\nThe people we used to be\r\nIt's even harder to picture\r\nThat you're not here next to me\r\nYou say it's too late to make it\r\nBut is it too late to try?\r\nAnd in our time that you wasted\r\nAll of our bridges burned down\r\n\r\nI've wasted my nights\r\nYou turned out the lights\r\nNow I'm paralyzed\r\nStill stuck in that time when we called it love\r\nBut even the sun sets in paradise\r\n\r\nI'm at a payphone trying to call home\r\nAll of my change I spent on you\r\nWhere have the times gone\r\nBaby it's all wrong, where are the plans we made for two?\r\n\r\nIf happy ever after did exist\r\nI would still be holding you like this\r\nAll those fairytales are full of sh*t\r\nOne more stupid love song I'll be sick\r\n\r\nYou turned your back on tomorrow\r\nCause you forgot yesterday\r\nI gave you my love to borrow\r\nBut just gave it away\r\nYou can't expect me to be fine\r\nI don't expect you to care\r\nI know I've said it before\r\nBut all of our bridges burned down\r\n\r\nI've wasted my nights\r\nYou turned out the lights\r\nNow I'm paralyzed\r\nStill stucked in that time when we called it love\r\nBut even the sun sets in paradise\r\n\r\nI'm at a payphone trying to call home\r\nAll of my change I spent on you\r\nWhere have the times gone\r\nBaby it's all wrong, where are the plans we made for two?\r\n\r\nIf happy ever after did exist\r\nI would still be holding you like this\r\nAll those fairytales are full of sh*t\r\nOne more stupid love song I'll be sick\r\n\r\nNow I'm at a payphone...",
					song_duration: "03:51",
					author_name: "Maroon 5",
					artist_id: 4,
					artist_name: "Maroon 5",
					category_id: 3,
					created_at: "2022-11-06",
					updated_at: "2022-11-14",
				},
				{
					id: 12,
					song_name: "abcdefu",
					song_cover: "song_abcdefu.jpg_1668927866469.jpeg",
					song_path: "song_abcdefu - GAYLE Royal the Serpent.mp3_1668927866469.mpeg",
					song_listened: 1,
					song_lyric:
						"Fuck you and your mom and your sister and your job\r\nAnd your broke-ass car and that shit you call art\r\nFuck you and your friends that I'll never see again\r\nEverybody but your dog, you can all fuck off\r\nI swear I meant to mean the best when it ended\r\nEven tried to bite my tongue when you start shit\r\nNow you're textin' all my friends asking questions\r\nThey never even liked you in the first place\r\nDated a girl that I hate for the attention\r\nShe only made it two days, what a connection\r\nIt's like you'd do anything for my affection\r\nYou're goin' all about it in the worst ways\r\nI was into you, but I'm over it now\r\nAnd I was tryin' to be nice\r\nBut nothing's getting through, so let me spell it out\r\nA-B-C-D-E, F-U\r\nAnd your mom and your sister and your job\r\nAnd your broke-ass car and that shit you call art\r\nFuck you and your friends that I'll never see again\r\nEverybody but your dog, you can all fuck off\r\nNah, nah, nah, nah, nah, nah, nah, nah\r\nA-B-C-D-E, F-U\r\nYou said you just needed space and so I gave it\r\nWhen I had nothin' to say you couldn't take it\r\nTold everyone I'm a bitch, so I became it\r\nAlways had to put yourself above me\r\nI was into you, but I'm over it now\r\nAnd I was tryin' to be nice\r\nBut nothing's getting through, so let me spell it out\r\nA-B-C-D-E, F-U\r\nAnd your mom and your sister and your job\r\nAnd your craigslist couch and the way your voice sounds\r\nFuck you and your friends that I'll never see again\r\nEverybody but your dog, you can all fuck off\r\nNah, nah, nah, nah, nah, nah, nah, nah\r\nA-B-C-D-E, F-U\r\nNah, nah, nah, nah, nah, nah, nah, nah\r\nA-B-C-D-E, F-U\r\nAnd your mom and your sister and your job\r\nAnd your broke-ass car and that shit you call art\r\nFuck you and your friends that I'll never see again\r\nEverybody but your dog, you can all fuck off",
					song_duration: "02:49",
					author_name: "Gayle",
					artist_id: 6,
					artist_name: "Gayle",
					category_id: 3,
					created_at: "2022-11-20",
					updated_at: "2022-11-22",
				},
				{
					id: 10,
					song_name: "Sau này",
					song_cover: "song_saunay.jpg_1668927280607.jpeg",
					song_path: "song_SauNayHuLai-LuuNhuocAnh.mp3_1668927280607.mpeg",
					song_listened: 0,
					song_lyric:
						"Hòu lái\r\nWǒ zǒng suàn xué huì le rú hé qù ài\r\nKě xī nǐ zǎo yǐ yuǎn qù\r\nXiāo shī zài rén hǎi\r\n\r\n\r\nHòu lái\r\nZhōng yú zài yǎn lèi zhōng míng bai\r\nYǒu xiē rén yī dàn cuò guò jiù bù zài\r\n\r\n\r\nZhī zi huā bái huā bàn\r\nLuò zài wǒ lán sè bǎi zhě qún shàng\r\nÀi nǐ nǐ qīng shēng shuō\r\nWǒ dī xià tou wén jiàn yī zhèn fēn fāng\r\nNà ge yǒng héng de yè wǎn\r\n\r\n\r\nShí qī suì zhòng xià\r\nNǐ wěn wǒ de nà ge yè wǎn\r\nRàng wǒ wǎng hòu de shí guāng\r\nMěi dāng yǒu gǎn tàn\r\nZǒng xiǎng qǐ dāng tiān de xīng guāng\r\nNà shí hou de ài qíng\r\nWèi shén me jiù néng nà yàng jiǎn dān\r\nÉr yòu shì wèi shén me rén nián shǎo shí\r\nYī dìng yào ràng shēn ài de rén shòu shāng\r\n\r\n\r\nZài zhè xiāng shì de shēn yè li\r\nYě zài jìng jìng zhuī huǐ gǎn shāng\r\nRú guǒ dāng shí wǒ men néng bù nà me jué jiàng\r\nXiàn zài yě bù nà me yí hàn\r\nNǐ dōu rú hé huí yì wǒ\r\nDài zhe xiào huò shì hěn chén mò\r\nZhè xiē nián lái yǒu méi yǒu rén néng ràng nǐ bù jì mò\r\n\r\n\r\nYǒng yuǎn bù huì zài chóng lái\r\nYǒu yī gè nán hái ài zhe nà ge nǚ hái",
					song_duration: "05:41",
					author_name: "Lưu Nhược Anh",
					artist_id: 4,
					artist_name: "Lưu Nhược Anh",
					category_id: 3,
					created_at: "2022-11-20",
					updated_at: "2022-11-20",
				},
			];
	}
	return res.status(200).send({ success: true, message: data });
});
app.get("/song/search/:keywords", async (req, res) => {
	const data = [
		{
			id: 7,
			song_name: "Payphone",
			song_cover: "song_payphone.jpg_1667722206608.jpeg",
			song_path: "song_Payphone-Maroon5.mp3_1667722206611.mpeg",
			song_listened: 9,
			song_lyric:
				"I'm at a payphone trying to call home\r\nAll of my change I spent on you\r\nWhere have the times gone\r\nBaby it's all wrong, where are the plans we made for two?\r\n\r\nYeah, I, I know it's hard to remember\r\nThe people we used to be\r\nIt's even harder to picture\r\nThat you're not here next to me\r\nYou say it's too late to make it\r\nBut is it too late to try?\r\nAnd in our time that you wasted\r\nAll of our bridges burned down\r\n\r\nI've wasted my nights\r\nYou turned out the lights\r\nNow I'm paralyzed\r\nStill stuck in that time when we called it love\r\nBut even the sun sets in paradise\r\n\r\nI'm at a payphone trying to call home\r\nAll of my change I spent on you\r\nWhere have the times gone\r\nBaby it's all wrong, where are the plans we made for two?\r\n\r\nIf happy ever after did exist\r\nI would still be holding you like this\r\nAll those fairytales are full of sh*t\r\nOne more stupid love song I'll be sick\r\n\r\nYou turned your back on tomorrow\r\nCause you forgot yesterday\r\nI gave you my love to borrow\r\nBut just gave it away\r\nYou can't expect me to be fine\r\nI don't expect you to care\r\nI know I've said it before\r\nBut all of our bridges burned down\r\n\r\nI've wasted my nights\r\nYou turned out the lights\r\nNow I'm paralyzed\r\nStill stucked in that time when we called it love\r\nBut even the sun sets in paradise\r\n\r\nI'm at a payphone trying to call home\r\nAll of my change I spent on you\r\nWhere have the times gone\r\nBaby it's all wrong, where are the plans we made for two?\r\n\r\nIf happy ever after did exist\r\nI would still be holding you like this\r\nAll those fairytales are full of sh*t\r\nOne more stupid love song I'll be sick\r\n\r\nNow I'm at a payphone...",
			song_duration: "03:51",
			author_name: "Maroon 5",
			artist_id: 4,
			artist_name: "Maroon 5",
			category_id: 3,
			created_at: "2022-11-06",
			updated_at: "2022-11-14",
		},
	];

	return res.status(200).send({ success: true, message: data });
});
app.get("/song/getbycategory/:id/:pages/:limit", async (req, res) => {
	const data = [
		{
			id: 2,
			song_name: "Crooked",
			song_cover: "song_TUN02973.jpg_1666260630440.jpg",
			song_path: "song_Crooked-GDRAGON.mp3_1666260632096.mpeg",
			song_listened: 3,
			song_lyric:
				"[English:]\r\n\r\nNothing ever lasts forever\r\nIn the end, you changed\r\nThere is no reason, no sincerity\r\nTake away such a thing as love\r\nTonight, I’ll be crooked\r\n\r\nLeave me alone\r\nI was alone anyway\r\nI have no one, everything is meaningless\r\nTake away the sugar-coated comfort\r\nTonight, I’ll be crooked\r\n\r\nI scream and get dizzy\r\nI vent out of boredom to other couples\r\nI start fights for no reason like a town gangster\r\nSometimes, I purposely shake my leg, crookedly\r\nThe main characters of the movie called this world is you and me\r\nA lonely island, lost and wandering\r\nThe empty streets are filled with those who are alone\r\nUnlike my heart, the weather is so damn nice\r\n\r\nI used to believe in you alone and I was happy\r\nBut like a joke, I am left alone\r\nYou used to promise me with your pinky finger\r\nBut in the end\r\n\r\nNothing ever lasts forever\r\nIn the end, you changed\r\nThere is no reason, no sincerity\r\nTake away such a thing as love\r\nTonight, I’ll be crooked\r\n\r\nLeave me alone\r\nI was alone anyway\r\nI have no one, everything is meaningless\r\nTake away the sugar-coated comfort\r\nTonight, I’ll be crooked\r\n\r\nI’ll put on thick eyeliner, use a whole can of hairspray\r\nLeather pants, leather jacket with a frown\r\nI want to hide my pain and become even more crooked\r\nSo you can feel sorry, I’ll spit toward the sky\r\nYou’re scared of my crude words and my rough eyes\r\nBut actually, I’m afraid, I want to go back but I have nowhere to go\r\nI want to love but no one to love, what am I supposed to do?\r\nI can’t turn it back\r\n\r\nI used to believe in you alone and I was happy\r\nBut like a joke, I am left alone\r\nYou used to promise me with your pinky finger\r\nBut in the end\r\n\r\nNothing ever lasts forever\r\nIn the end, you changed\r\nThere is no reason, no sincerity\r\nTake away such a thing as love\r\nTonight, I’ll be crooked\r\n\r\nLeave me alone\r\nI was alone anyway\r\nI have no one, everything is meaningless\r\nTake away the sugar-coated comfort\r\nTonight, I’ll be crooked\r\n\r\nWill you not say anything for me tonight?\r\nI didn’t know being alone would be this hard (I miss you)\r\nWill you be my friend tonight?\r\nOn this good day, this beautiful day, this day where I miss you\r\nTonight, I’ll be crooked\r\n\r\n[Romanized:]\r\n\r\nYeongwonhan geon jeoldae eobseo\r\nGyeolguge neon byeonhaetji\r\nIyudo eobseo jinsimi eobseo\r\nSarang gateun sori ttawin jibeo chyeo\r\nOneulbameun ppittakhage\r\n\r\nNaebeoryeodwo\r\nEochapi nan honjayeotji\r\nAmudo eobseo da uimi eobseo\r\nSatang ballin wiro ttawin jibeo chyeo\r\nOneulbameun ppittakhage\r\n\r\nBeoreokbeoreok sorichyeo naneun hyeongijeung\r\nNae simsimpuri hwa puri sangdaeneun dareun yeonindeul\r\nGwaenhi sibi georeo dongne yangachicheoreom\r\nGakkeum nan ppittakhage darireul ilbureo jeoreo\r\nI sesangiran yeonghwa sok juingongeun neowana\r\nGal goseul irko hemaeneun oeroun jeo seom hana\r\nTeongteong bin gilgeorireul gadeuk chaeun gireogideul\r\nNae mamgwa dalli nalssineun cham deoreopgedo joha\r\n\r\nNeo hana mitgo manyang haengbokhaesseotdeon naega\r\nUseupge namgyeojyeosseo\r\nSaekkisongarak geolgo maengsehaesseotdeon nega\r\nGyeolgugen\r\n\r\nYeongwonhan geon jeoldae eobseo\r\nGyeolguge neon byeonhaetji\r\nIyudo eobseo jinsimi eobseo\r\nSarang gateun sori ttawin jibeo chyeo\r\nOneulbameun ppittakhage\r\n\r\nNaebeoryeodwo\r\nEochapi nan honjayeotji\r\nAmudo eobseo da uimi eobseo\r\nSatang ballin wiro ttawin jibeo chyeo\r\nOneulbameun ppittakhage\r\n\r\nJiteun airain geutgo seupeurei han tong da sseugo\r\nGajukbaji, gajukjaket geolchigo insang sseugo\r\nApeumeul sumgin chae apeuro deo bittureojillae\r\nNega mianhaejige haneureda chimeul kak\r\nTubakhaejin nae maltuwa geochireojin nunbichi museowo neo\r\nSireun na itji duryeowojyeo doragagopeunde gal de eopgo\r\nSaranghagopeunde sangdae eopgo mwol eojjeorago\r\nDori kil su eopdeorago\r\n\r\nNeo hana mitgo manyang haengbokhaesseotdeon naega\r\nUseupge namgyeojyeosseo\r\nSaekkisongarak geolgo maengsehaesseotdeon nega\r\nGyeolgugen\r\n\r\nYeongwonhan geon jeoldae eobseo\r\nGyeolguge neon byeonhaetji\r\nIyudo eobseo jinsimi eobseo\r\nSarang gateun sori ttawin jibeo chyeo\r\nOneulbameun ppittakhage\r\n\r\nNaebeoryeodwo\r\nEochapi nan honjayeotji\r\nAmudo eobseo da uimi eobseo\r\nSatang ballin wiro ttawin jibeo chyeo\r\nOneulbameun ppittakhage\r\n\r\nOneulbameun nareul wihae amu mal marajullaeyo\r\nHonjain ge na ireoke himdeul jul mollanneunde (geudaega bogo sipeo)\r\nOneulbamman nareul wihae chinguga doeeojullaeyo\r\nI joheun nal areumdaun nal nega geuriun nal\r\nOneulbameun ppittakhage",
			song_duration: "03:44",
			author_name: "G-Dragon",
			artist_id: null,
			artist_name: "G-Dragon",
			category_id: 2,
			created_at: "2022-10-20",
			updated_at: "2022-11-15",
		},
		{
			id: 4,
			song_name: "Fiction",
			song_cover: "song_fiction.jpg_1667378906185.jpeg",
			song_path: "song_Fiction-Beast.mp3_1667378906187.mpeg",
			song_listened: 13,
			song_lyric:
				"아직 난 널 잊지 못하고 모든걸 다 믿지 못하고\r\n이렇게 널 보내지 못하고 오늘도\r\n다시 만들어볼게 우리 이야기\r\n끝나지 않게 아주 기나긴\r\n살갗을 파고 스며드는 상실감은 잠시 묻어둘게\r\n새로 써 내려가 시작은 행복하게 웃고 있는 너와 나\r\n네가 날 떠나지 못하게 배경은 출구가 없는 좁은 방 안\r\n아무렇지 않게 네게 키스하고\r\n달콤한 너의 곁을 떠나가질 못해\r\n우린 끝이라는건 없어\r\n이렇게 난 또 (fiction in fiction)\r\n잊지 못하고 (fiction in fiction)\r\n내 가슴 속에 끝나지 않을 이야길 쓰고 있어\r\n널 붙잡을게 (fiction in fiction)\r\n놓지 않을게 (fiction in fiction in fiction)\r\n끝나지 않은 너와 나의 이야기 속에서\r\n오늘도 in fiction\r\n지금 여긴 행복한 이야기들밖에 없어\r\n너무 행복한 우리 둘만의 이야기가 이렇게\r\n(현실관 다르게)\r\n써 있어 점점 채워지고 있어\r\n너는 나에게로 달려와서 안기고\r\n품 안에 안긴 너를 나는 절대 놓지 못해\r\n우린 끝이라는건 없어\r\n이렇게 난 또 (fiction in fiction)\r\n잊지 못하고 (fiction in fiction)\r\n내 가슴 속에 끝나지 않을 이야길 쓰고 있어\r\n널 붙잡을게 (fiction in fiction)\r\n놓지 않을게 (fiction in fiction in fiction)\r\n끝나지 않은 너와 나의 이야기 속에서\r\n오늘도 in fiction\r\n다시 한 번 더 말하지만\r\n지금 너는 내 옆에 있다고 그렇게 믿고 있어 난\r\n난 목적을 잃어버린 작가\r\n이 소설의 끝은 어떻게 마무리 지어야 해\r\n사랑해 사랑해 사랑해 사랑해 사랑해 이 세 글자만 써\r\n내려가 무뎌진 펜 눈물로 얼룩진 낡은 종이 위로\r\n행복할 수도 슬플 수도 없어 이 이야기는\r\n지금 난 너무나도 행복한 생각에 이야기를 쓰지만\r\n모든게 바램일 뿐이라고 여전히\r\n난 행복한걸 (fiction in fiction in fiction)\r\n우리 함께인걸 (fiction in fiction in fiction)\r\n이제 시작인걸 (fiction in fiction in fiction)\r\n끝은 없는걸 (fiction in fiction in fiction)",
			song_duration: "03:54",
			author_name: "Nhóm BEAST",
			artist_id: null,
			artist_name: "Nhóm BEAST",
			category_id: 2,
			created_at: "2022-11-02",
			updated_at: "2022-11-19",
		},
		{
			id: 9,
			song_name: "Thatxx",
			song_cover: "song_thatxx.jpg_1668918152432.jpeg",
			song_path: "song_ThatXx-GDRAGON.mp3_1668918152433.mpeg",
			song_listened: 1,
			song_lyric:
				"우연히 길을 걷다 네 남잘 봤어(Yea I saw him)\r\n혹시나 했던 내 예감이 맞았어 (I told you)\r\n네가 준 반지를 빼고 한쪽엔 팔짱을 끼고\r\n그냥 여기까지만 말할게 (I don't wanna hurt you)\r\n근데 오히려 너는 내게 화를 내 (Why?)\r\n그는 절대로 그럴 리가 없대 (Sure you're right)\r\n나는 네 눈칠 살피고 내가 잘 못 본 거라고\r\n그래 널 위해 거짓말할게 (I'm sorry)\r\nOh 날 몰라주는 네가 미워\r\n이 기다림이 싫어\r\n그 손 이제 놓으라고\r\n네가 슬퍼할 때면 나는\r\n죽을 것만 같다고 baby\r\n그 새끼보다 내가 못한 게 뭐야\r\n도대체 왜 나는 가질 수 없는 거야\r\n그 새끼는 너를 사랑하는 게 아냐\r\n언제까지 바보같이 울고만 있을 거야\r\n넌 그 사람 얘길 할 땐 행복해 보여 (You look happy)\r\n이렇게라도 웃으니 좋아 보여 (I'm happy)\r\n그를 정말 사랑한다고\r\n마치 영원할거라고 믿는 네 모습이\r\nI don't know what to say no mo'\r\n너의 친구들 모두 그를 잘 알아 (yup they know)\r\n뻔히 다 보이는걸 너만 왜 못 봐 (It's you)\r\nThey say love is blind\r\nOh baby you so blind\r\n제발 헤어지기를 바랄게\r\nOh 날 몰라주는 네가 미워\r\n이 기다림이 싫어\r\n그 손 이제 놓으라고\r\n네가 슬퍼할 때면 나는\r\n죽을 것만 같다고 baby\r\n그 새끼보다 내가 못한 게 뭐야\r\n도대체 왜 나는 가질 수 없는 거야\r\n그 새끼는 너를 사랑하는 게 아냐\r\n언제까지 바보같이 울고만 있을 거야\r\nYeah, 비싼 차에 예쁜 옷\r\n고급 레스토랑 넌 잘 어울려\r\n하지만 네 옆 그 X는 정말 아냐\r\n너랑은 안 어울려\r\n네 앞에서 거짓미소를 지으며\r\n네 볼과 머릿결을 만지며\r\n속으론 분명 다른 여자를 생각해\r\n어쩜 그럴 수 있니 죄 같애\r\n네가 흘린 눈물만큼 내가 더 잘해줄게 baby\r\n너 혼자 감당할 아픔 내게도 좀 나눠줄래 baby\r\n나 좀 봐달라고 그대 사랑이 왜 나란걸 몰라\r\n왜 너만 몰라\r\n그 새끼보다 내가 못한 게 뭐야\r\n도대체 왜 나는 가질 수 없는 거야\r\n그 새끼는 너를 사랑하는 게 아냐\r\n언제까지 바보같이 울고만 있을 거야\r\n그 새끼보다 내가 못한 게 뭐야\r\n도대체 왜 나는 가질 수 없는 거야\r\n그 새끼는 너를 사랑하는 게 아냐\r\n언제까지 바보같이 울고만 있을 거야",
			song_duration: "03:19",
			author_name: "G-dragon",
			artist_id: 6,
			artist_name: "G-dragon",
			category_id: 2,
			created_at: "2022-11-20",
			updated_at: "2022-11-20",
		},
	];

	return res.status(200).send({ success: true, message: data, total: 3 });
});
app.get("/song/getbyartist/:id", async (req, res) => {
	const data = [
		{
			id: 7,
			song_name: "Payphone",
			song_cover: "song_payphone.jpg_1667722206608.jpeg",
			song_path: "song_Payphone-Maroon5.mp3_1667722206611.mpeg",
			song_listened: 9,
			song_lyric:
				"I'm at a payphone trying to call home\r\nAll of my change I spent on you\r\nWhere have the times gone\r\nBaby it's all wrong, where are the plans we made for two?\r\n\r\nYeah, I, I know it's hard to remember\r\nThe people we used to be\r\nIt's even harder to picture\r\nThat you're not here next to me\r\nYou say it's too late to make it\r\nBut is it too late to try?\r\nAnd in our time that you wasted\r\nAll of our bridges burned down\r\n\r\nI've wasted my nights\r\nYou turned out the lights\r\nNow I'm paralyzed\r\nStill stuck in that time when we called it love\r\nBut even the sun sets in paradise\r\n\r\nI'm at a payphone trying to call home\r\nAll of my change I spent on you\r\nWhere have the times gone\r\nBaby it's all wrong, where are the plans we made for two?\r\n\r\nIf happy ever after did exist\r\nI would still be holding you like this\r\nAll those fairytales are full of sh*t\r\nOne more stupid love song I'll be sick\r\n\r\nYou turned your back on tomorrow\r\nCause you forgot yesterday\r\nI gave you my love to borrow\r\nBut just gave it away\r\nYou can't expect me to be fine\r\nI don't expect you to care\r\nI know I've said it before\r\nBut all of our bridges burned down\r\n\r\nI've wasted my nights\r\nYou turned out the lights\r\nNow I'm paralyzed\r\nStill stucked in that time when we called it love\r\nBut even the sun sets in paradise\r\n\r\nI'm at a payphone trying to call home\r\nAll of my change I spent on you\r\nWhere have the times gone\r\nBaby it's all wrong, where are the plans we made for two?\r\n\r\nIf happy ever after did exist\r\nI would still be holding you like this\r\nAll those fairytales are full of sh*t\r\nOne more stupid love song I'll be sick\r\n\r\nNow I'm at a payphone...",
			song_duration: "03:51",
			author_name: "Maroon 5",
			artist_id: 4,
			artist_name: "Maroon 5",
			category_id: 3,
			created_at: "2022-11-06",
			updated_at: "2022-11-14",
		},
	];

	return res.status(200).send({ success: true, message: data });
});
app.get("/song/getbycategory/:id/:pages/:limit", async (req, res) => {
	const data = [
		{
			id: 1,
			song_name: "Cơn mưa ngang qua part2",
			song_cover: "song_cb2-thumb@2x.jpg_1666257355901.jpg",
			song_path: "song_ConMuaNgangQuaPart2-M-TP.mp3_1666257355901.mpeg",
			song_listened: 7,
			song_lyric:
				"Cơn mưa ngang qua…Cơn mưa ngang qua..Eh..!!\r\nLadykillah…M-tppppp..!!\r\nCan you feel me.\r\nEhhhhhhhhhhhhhhhhhhhhhh.\r\n\r\nHOOK:\r\nBỏ lại sau lưng tất cả..Bỏ lại sau lưng tất cả..\r\nĐể rời xa anh và bên ai,kề bên vai là ai..???\r\nLục tìm trong cơn mưa này..Lục tìm trong cơn mưa này..\r\nNụ cười em nơi đâu,đâu,đâu..\r\nNước mắt rơi,rơi..\r\nMong người về đây!\r\n\r\n\r\nCơn mưa ngang qua đã mang em đi xa nơi anh.\r\nCơn mưa ngang qua đã mang em phôi pha xa nơi anh.\r\nMột giây thôi..Ùa về một giây thôi..\r\nHỡi những giấc mơ,em mang trao anh với bao kỉ niệm.\r\nHãy nói rõ ra đi…Sao em như vậy..!!\r\nĐôi tay anh giờ này nó quá yếu mềm.\r\nKhông thể níu em trở lại về,một giây được bên em sao quá xa..Phải chăng em đã quên rồi..!!!\r\n\r\nCơn gió hãy tìm xem em ở đâu.?.Em ở đâu..??\r\nHãy nhắn em về đi,trở lại nơi em đã từng đánh rớt rơi một nụ cười.\r\nNhìn lại căn phòng sao quặn đau.\r\nTràn ngập bao nỗi buồn.\r\nMưa lại vội rơi và cướp mất em….Eh..Eh.\r\nHOOK:\r\nCơn mưa ngang qua mang em đi xa.\r\nCơn mưa ngang qua khiến em phôi pha.\r\nTim anh nghẹn ngào,tìm giấc mơ ngày nào…Uh..Ehhhh!\r\nSau cơn mưa anh bỗng thấy đau hơn.\r\nKhi tim em ra đi quên đi một bóng hình.\r\nXin người trở về…\r\nNíu em trở về..!!!Oh.",
			song_duration: "03:34",
			author_name: "Sơn tùng MTP",
			artist_id: 5,
			artist_name: "Sơn tùng MTP",
			category_id: 1,
			created_at: "2022-10-20",
			updated_at: "2022-11-22",
		},
		{
			id: 8,
			song_name: "Muộn rồi mà sao còn",
			song_cover: "song_muonroimasaocon.jpg_1668915908035.jpeg",
			song_path: "song_MuonRoiMaSaoCon-SonTungMTP.mp3_1668915908036.mpeg",
			song_listened: 1,
			song_lyric:
				"Muộn rồi mà sao còn\r\nNhìn lên trần nhà rồi quay ra lại quay vào\r\nNằm trằn trọc vậy đến sáng mai\r\nÔm tương tư nụ cười của ai đó\r\nLàm con tim ngô nghê như muốn khóc oà\r\nVắt tay lên trên trán mơ mộng\r\nĐược đứng bên em trong nắng xuân hồng\r\nMột giờ sáng\r\nTrôi qua trôi nhanh kéo theo ưu phiền miên man\r\nÂm thầm gieo tên em vẽ lên hi vọng\r\nĐúng là yêu thật rồi còn không thì hơi phí này\r\nCứ thế loanh quanh loanh quanh loanh quanh lật qua lật lại hai giờ\r\nNhững ngôi sao trên cao\r\nLà người bạn tâm giao\r\nLắng nghe anh luyên thuyên về một tình đầu đẹp tựa chiêm bao\r\nCó nghe thôi đã thấy ngọt ngào đủ biết anh si mê em nhường nào\r\nÍt khi văn thơ anh dạt dào bụng đói nhưng vui quên luôn cồn cào\r\nNắm đôi tay kiêu sa\r\nĐược một lần không ta\r\nNghĩ qua thôi con tim trong anh đập tung lên rung nóc rung nhà\r\nHoá ra yêu đơn phương một người\r\nHoá ra khi tơ vương một người\r\nBa giờ đêm vẫn ngồi cười\r\nCứ ôm anh đi ôm anh đi ôm anh đi ôm anh đi\r\nÔm trong cơn mơ trong cơn mơ trong cơn mơ ôm trong cơn mơ\r\nCó thế cũng khiến anh vui điên lên\r\nNgỡ như em đang bên\r\nChắp bút đôi ba câu thơ ngọt ngào\r\nMuốn em đặt tên\r\nCứ ôm anh đi ôm anh đi ôm anh đi ôm anh đi\r\nÔm trong giấc mơ trong cơn mơ trong cơn mơ ôm trong cơn mơ\r\nYêu đến vậy thôi phát điên rồi làm sao giờ\r\nChịu\r\nĐêm nay không ngủ tay kê lên tủ\r\nMiên man anh tranh thủ\r\nChơi vơi suy tư bao nhiêu cho đủ\r\nYêu em ngu ngơ mình tôi\r\nYêu không quan tâm ngày trôi\r\nYêu ánh mắt bờ môi\r\nYêu đơn phương vậy thôi\r\nLại còn chối\r\nCon tim thẹn thùng đập lạc lối liên hồi\r\nĐừng chày cối\r\nMiệng cười cả ngày vậy là chết toi rồi\r\nNgày càng nhiều thêm\r\nTình yêu cho em ngày càng nhiều thêm\r\nMuốn nắm đôi bàn tay đó một lần\r\nDu dương chìm sâu trong từng câu ca dịu êm\r\nNhững ngôi sao trên cao là người bạn tâm giao\r\nLắng nghe anh luyên thuyên về một tình đầu đẹp tựa chiêm bao\r\nCó nghe tôi đã thấy ngọt ngào đủ biết anh si mê em nhường nào\r\nÍt khi văn thơ anh dạt dào bụng đói nhưng vui quên luôn cồn cào\r\nNắm đôi tay kiêu sa\r\nĐược một lần không ta\r\nNghĩ qua thôi con tim trong anh đập tung lên rung nóc rung nhà\r\nHoá ra yêu đơn phương một người\r\nHoá ra khi tơ vương một người\r\nBa giờ đêm vẫn ngồi cười\r\nCứ ôm anh đi ôm anh đi ôm anh đi ôm anh đi\r\nÔm trong cơn mơ trong cơn mơ trong cơn mơ ôm trong cơn mơ\r\nCó thế cũng khiến anh vui điên lên\r\nNgỡ như em đang bên\r\nChắp bút đôi ba câu thơ ngọt ngào\r\nMuốn em đặt tên\r\nCứ ôm anh đi ôm anh đi ôm anh đi ôm anh đi\r\nÔm trong giấc mơ trong cơn mơ trong cơn mơ ôm trong cơn mơ\r\nYêu đến vậy thôi phát điên rồi làm sao giờ\r\nEm xinh như một thiên thần\r\nNhư một thiên thần\r\nNhư một thiên thần\r\nNgỡ như em là thiên thần\r\nXinh như một thiên thần\r\nNhư một thiên thần\r\nEm xinh như một thiên thần\r\nNhư một thiên thần\r\nNhư một thiên thần\r\nNgỡ như em là thiên thần\r\nNgỡ như ngỡ như\r\nNgỡ như ngỡ như ngỡ như\r\nCứ ôm anh đi ôm anh đi ôm anh đi ôm anh đi\r\nÔm trong cơn mơ trong cơn mơ trong cơn mơ ôm trong cơn mơ\r\nCó thế cũng khiến anh vui điên lên\r\nNgỡ như em đang bên\r\nChắp bút đôi ba câu thơ ngọt ngào\r\nMuốn em đặt tên\r\nCứ ôm anh đi ôm anh đi ôm anh đi ôm anh đi\r\nÔm trong giấc mơ trong cơn mơ trong cơn mơ ôm trong cơn mơ\r\nYêu đến vậy thôi phát điên rồi làm sao giờ",
			song_duration: "04:35",
			author_name: "Duy Duc Nguyen",
			artist_id: 5,
			artist_name: "Sơn Tùng MTP",
			category_id: 1,
			created_at: "2022-11-20",
			updated_at: "2022-11-20",
		},
	];

	return res.status(200).send({ success: true, message: data });
});
/********************* Album API: ***************************/

app.post("/album/addnew", async (req, res) => {
	return res.status(200).send({ success: true, message: "Successfully" });
});
app.get("/album/getall/:id", async (req, res) => {
	const data = [
		{
			id: 6,
			user_id: 5,
			album_name: "Sky tour",
			album_code: "13AL-1668850060902",
			album_desc:
				"Sky Tour là một bộ phim tài liệu âm nhạc của ca sĩ, nhạc sĩ người Việt Nam Sơn Tùng M-TP về chuyến lưu diễn Sky Tour năm 2019 trước thềm phát hành album Chúng ta. Bộ phim bắt đầu khởi chiếu tại các rạp phim trên toàn quốc vào ngày 12 tháng 6 năm",
			album_cover: "album_phim-sky-tour.jpg_1668850060897.jpeg",
			album_status: "public",
			created_at: "2022-11-19",
			updated_at: "2022-11-19",
		},
	];
	return res.status(200).send({ success: true, message: data });
});
app.post("/album/addsongtoalbum", async (req, res) => {
	return res.status(200).send({ success: true, message: "Successfully" });
});
app.get("/album/getalbumdetail/:album_code", async (req, res) => {
	const data = [
		{
			id: 79,
			album_code: "13AL-1668850060902",
			song_id: 4,
			song_name: "Fiction",
			song_cover: "song_fiction.jpg_1667378906185.jpeg",
			song_path: "song_Fiction-Beast.mp3_1667378906187.mpeg",
			song_lyric:
				"아직 난 널 잊지 못하고 모든걸 다 믿지 못하고\r\n이렇게 널 보내지 못하고 오늘도\r\n다시 만들어볼게 우리 이야기\r\n끝나지 않게 아주 기나긴\r\n살갗을 파고 스며드는 상실감은 잠시 묻어둘게\r\n새로 써 내려가 시작은 행복하게 웃고 있는 너와 나\r\n네가 날 떠나지 못하게 배경은 출구가 없는 좁은 방 안\r\n아무렇지 않게 네게 키스하고\r\n달콤한 너의 곁을 떠나가질 못해\r\n우린 끝이라는건 없어\r\n이렇게 난 또 (fiction in fiction)\r\n잊지 못하고 (fiction in fiction)\r\n내 가슴 속에 끝나지 않을 이야길 쓰고 있어\r\n널 붙잡을게 (fiction in fiction)\r\n놓지 않을게 (fiction in fiction in fiction)\r\n끝나지 않은 너와 나의 이야기 속에서\r\n오늘도 in fiction\r\n지금 여긴 행복한 이야기들밖에 없어\r\n너무 행복한 우리 둘만의 이야기가 이렇게\r\n(현실관 다르게)\r\n써 있어 점점 채워지고 있어\r\n너는 나에게로 달려와서 안기고\r\n품 안에 안긴 너를 나는 절대 놓지 못해\r\n우린 끝이라는건 없어\r\n이렇게 난 또 (fiction in fiction)\r\n잊지 못하고 (fiction in fiction)\r\n내 가슴 속에 끝나지 않을 이야길 쓰고 있어\r\n널 붙잡을게 (fiction in fiction)\r\n놓지 않을게 (fiction in fiction in fiction)\r\n끝나지 않은 너와 나의 이야기 속에서\r\n오늘도 in fiction\r\n다시 한 번 더 말하지만\r\n지금 너는 내 옆에 있다고 그렇게 믿고 있어 난\r\n난 목적을 잃어버린 작가\r\n이 소설의 끝은 어떻게 마무리 지어야 해\r\n사랑해 사랑해 사랑해 사랑해 사랑해 이 세 글자만 써\r\n내려가 무뎌진 펜 눈물로 얼룩진 낡은 종이 위로\r\n행복할 수도 슬플 수도 없어 이 이야기는\r\n지금 난 너무나도 행복한 생각에 이야기를 쓰지만\r\n모든게 바램일 뿐이라고 여전히\r\n난 행복한걸 (fiction in fiction in fiction)\r\n우리 함께인걸 (fiction in fiction in fiction)\r\n이제 시작인걸 (fiction in fiction in fiction)\r\n끝은 없는걸 (fiction in fiction in fiction)",
			song_duration: "03:54",
			author_name: "Nhóm BEAST",
			artist_name: "Nhóm BEAST",
			author_id: null,
			artist_id: null,
			category_id: 2,
		},
		{
			id: 80,
			album_code: "13AL-1668850060902",
			song_id: 1,
			song_name: "Cơn mưa ngang qua part2",
			song_cover: "song_cb2-thumb@2x.jpg_1666257355901.jpeg",
			song_path: "song_ConMuaNgangQuaPart2-M-TP.mp3_1666257355901.mpeg",
			song_lyric:
				"Cơn mưa ngang qua…Cơn mưa ngang qua..Eh..!!\r\nLadykillah…M-tppppp..!!\r\nCan you feel me.\r\nEhhhhhhhhhhhhhhhhhhhhhh.\r\n\r\nHOOK:\r\nBỏ lại sau lưng tất cả..Bỏ lại sau lưng tất cả..\r\nĐể rời xa anh và bên ai,kề bên vai là ai..???\r\nLục tìm trong cơn mưa này..Lục tìm trong cơn mưa này..\r\nNụ cười em nơi đâu,đâu,đâu..\r\nNước mắt rơi,rơi..\r\nMong người về đây!\r\n\r\n\r\nCơn mưa ngang qua đã mang em đi xa nơi anh.\r\nCơn mưa ngang qua đã mang em phôi pha xa nơi anh.\r\nMột giây thôi..Ùa về một giây thôi..\r\nHỡi những giấc mơ,em mang trao anh với bao kỉ niệm.\r\nHãy nói rõ ra đi…Sao em như vậy..!!\r\nĐôi tay anh giờ này nó quá yếu mềm.\r\nKhông thể níu em trở lại về,một giây được bên em sao quá xa..Phải chăng em đã quên rồi..!!!\r\n\r\nCơn gió hãy tìm xem em ở đâu.?.Em ở đâu..??\r\nHãy nhắn em về đi,trở lại nơi em đã từng đánh rớt rơi một nụ cười.\r\nNhìn lại căn phòng sao quặn đau.\r\nTràn ngập bao nỗi buồn.\r\nMưa lại vội rơi và cướp mất em….Eh..Eh.\r\nHOOK:\r\nCơn mưa ngang qua mang em đi xa.\r\nCơn mưa ngang qua khiến em phôi pha.\r\nTim anh nghẹn ngào,tìm giấc mơ ngày nào…Uh..Ehhhh!\r\nSau cơn mưa anh bỗng thấy đau hơn.\r\nKhi tim em ra đi quên đi một bóng hình.\r\nXin người trở về…\r\nNíu em trở về..!!!Oh.",
			song_duration: "03:34",
			author_name: "Sơn tùng MTP",
			artist_name: "Sơn tùng MTP",
			author_id: null,
			artist_id: 5,
			category_id: 1,
		},
		{
			id: 81,
			album_code: "13AL-1668850060902",
			song_id: 2,
			song_name: "Crooked",
			song_cover: "song_TUN02973.jpg_1666260630440.jpeg",
			song_path: "song_Crooked-GDRAGON.mp3_1666260632096.mpeg",
			song_lyric:
				"[English:]\r\n\r\nNothing ever lasts forever\r\nIn the end, you changed\r\nThere is no reason, no sincerity\r\nTake away such a thing as love\r\nTonight, I’ll be crooked\r\n\r\nLeave me alone\r\nI was alone anyway\r\nI have no one, everything is meaningless\r\nTake away the sugar-coated comfort\r\nTonight, I’ll be crooked\r\n\r\nI scream and get dizzy\r\nI vent out of boredom to other couples\r\nI start fights for no reason like a town gangster\r\nSometimes, I purposely shake my leg, crookedly\r\nThe main characters of the movie called this world is you and me\r\nA lonely island, lost and wandering\r\nThe empty streets are filled with those who are alone\r\nUnlike my heart, the weather is so damn nice\r\n\r\nI used to believe in you alone and I was happy\r\nBut like a joke, I am left alone\r\nYou used to promise me with your pinky finger\r\nBut in the end\r\n\r\nNothing ever lasts forever\r\nIn the end, you changed\r\nThere is no reason, no sincerity\r\nTake away such a thing as love\r\nTonight, I’ll be crooked\r\n\r\nLeave me alone\r\nI was alone anyway\r\nI have no one, everything is meaningless\r\nTake away the sugar-coated comfort\r\nTonight, I’ll be crooked\r\n\r\nI’ll put on thick eyeliner, use a whole can of hairspray\r\nLeather pants, leather jacket with a frown\r\nI want to hide my pain and become even more crooked\r\nSo you can feel sorry, I’ll spit toward the sky\r\nYou’re scared of my crude words and my rough eyes\r\nBut actually, I’m afraid, I want to go back but I have nowhere to go\r\nI want to love but no one to love, what am I supposed to do?\r\nI can’t turn it back\r\n\r\nI used to believe in you alone and I was happy\r\nBut like a joke, I am left alone\r\nYou used to promise me with your pinky finger\r\nBut in the end\r\n\r\nNothing ever lasts forever\r\nIn the end, you changed\r\nThere is no reason, no sincerity\r\nTake away such a thing as love\r\nTonight, I’ll be crooked\r\n\r\nLeave me alone\r\nI was alone anyway\r\nI have no one, everything is meaningless\r\nTake away the sugar-coated comfort\r\nTonight, I’ll be crooked\r\n\r\nWill you not say anything for me tonight?\r\nI didn’t know being alone would be this hard (I miss you)\r\nWill you be my friend tonight?\r\nOn this good day, this beautiful day, this day where I miss you\r\nTonight, I’ll be crooked\r\n\r\n[Romanized:]\r\n\r\nYeongwonhan geon jeoldae eobseo\r\nGyeolguge neon byeonhaetji\r\nIyudo eobseo jinsimi eobseo\r\nSarang gateun sori ttawin jibeo chyeo\r\nOneulbameun ppittakhage\r\n\r\nNaebeoryeodwo\r\nEochapi nan honjayeotji\r\nAmudo eobseo da uimi eobseo\r\nSatang ballin wiro ttawin jibeo chyeo\r\nOneulbameun ppittakhage\r\n\r\nBeoreokbeoreok sorichyeo naneun hyeongijeung\r\nNae simsimpuri hwa puri sangdaeneun dareun yeonindeul\r\nGwaenhi sibi georeo dongne yangachicheoreom\r\nGakkeum nan ppittakhage darireul ilbureo jeoreo\r\nI sesangiran yeonghwa sok juingongeun neowana\r\nGal goseul irko hemaeneun oeroun jeo seom hana\r\nTeongteong bin gilgeorireul gadeuk chaeun gireogideul\r\nNae mamgwa dalli nalssineun cham deoreopgedo joha\r\n\r\nNeo hana mitgo manyang haengbokhaesseotdeon naega\r\nUseupge namgyeojyeosseo\r\nSaekkisongarak geolgo maengsehaesseotdeon nega\r\nGyeolgugen\r\n\r\nYeongwonhan geon jeoldae eobseo\r\nGyeolguge neon byeonhaetji\r\nIyudo eobseo jinsimi eobseo\r\nSarang gateun sori ttawin jibeo chyeo\r\nOneulbameun ppittakhage\r\n\r\nNaebeoryeodwo\r\nEochapi nan honjayeotji\r\nAmudo eobseo da uimi eobseo\r\nSatang ballin wiro ttawin jibeo chyeo\r\nOneulbameun ppittakhage\r\n\r\nJiteun airain geutgo seupeurei han tong da sseugo\r\nGajukbaji, gajukjaket geolchigo insang sseugo\r\nApeumeul sumgin chae apeuro deo bittureojillae\r\nNega mianhaejige haneureda chimeul kak\r\nTubakhaejin nae maltuwa geochireojin nunbichi museowo neo\r\nSireun na itji duryeowojyeo doragagopeunde gal de eopgo\r\nSaranghagopeunde sangdae eopgo mwol eojjeorago\r\nDori kil su eopdeorago\r\n\r\nNeo hana mitgo manyang haengbokhaesseotdeon naega\r\nUseupge namgyeojyeosseo\r\nSaekkisongarak geolgo maengsehaesseotdeon nega\r\nGyeolgugen\r\n\r\nYeongwonhan geon jeoldae eobseo\r\nGyeolguge neon byeonhaetji\r\nIyudo eobseo jinsimi eobseo\r\nSarang gateun sori ttawin jibeo chyeo\r\nOneulbameun ppittakhage\r\n\r\nNaebeoryeodwo\r\nEochapi nan honjayeotji\r\nAmudo eobseo da uimi eobseo\r\nSatang ballin wiro ttawin jibeo chyeo\r\nOneulbameun ppittakhage\r\n\r\nOneulbameun nareul wihae amu mal marajullaeyo\r\nHonjain ge na ireoke himdeul jul mollanneunde (geudaega bogo sipeo)\r\nOneulbamman nareul wihae chinguga doeeojullaeyo\r\nI joheun nal areumdaun nal nega geuriun nal\r\nOneulbameun ppittakhage",
			song_duration: "03:44",
			author_name: "G-Dragon",
			artist_name: "G-Dragon",
			author_id: null,
			artist_id: null,
			category_id: 2,
		},
		{
			id: 82,
			album_code: "13AL-1668850060902",
			song_id: 3,
			song_name: "Chàng trai đang thất tình",
			song_cover: "song_changtraidangthattinh.jpg_1666275758163.jpeg",
			song_path: "song_ChangTraiDangThatTinh-DatG,Binz.mp3_1666275758166.mpeg",
			song_lyric:
				"Vers 1:\r\n\r\nCó lẽ em cũng đã quên anh rồi (đã quên anh rồi)\r\n\r\nCó lẽ em cũng chẳng cần phải nhớ (chẳng cần phải nhớ đâu… em)\r\n\r\nGóc cuối bên hiên nhà, Chiều nay cũng đã có mưa\r\n\r\nGiờ khóc làm gì, khi em cười (khi… em… cười)\r\n\r\nCó lẽ yêu thương bao lâu này giờ buông, là buông\r\n\r\nCó lẽ em cứ, vương vấn mãi, câu chuyện buồn (mãi câu… chuyện buồn)\r\n\r\nĐến hết đêm nay thôi, ngày mai lòng này sẽ khác\r\n\r\nNhưng không, tim anh vẫn nhớ mùa đông\r\n\r\nVậy giờ anh làm sao, làm sao có thể quên yêu thương ngày nào\r\n\r\nNhững ngày anh có em, vòng tay đơn sơ ấm áp\r\n\r\nVậy giờ đây thì sao, thì sao em ở đâu khi anh 1 mình\r\n\r\nTình yêu đầu tiên khắc sâu, dưới gốc hiên nhà có mưa..\r\n\r\nRap :\r\n\r\nBây giờ anh làm sao anh làm sao\r\n\r\nVùi chôn, anh vùi chôn trong kỉ niệm\r\n\r\nMây đen trôi, mây đen vẫn kéo đến\r\n\r\nBão giông thêm bão giông cứ thay phiên\r\n\r\nTrả lại anh bờ môi ấm, Trả lại anh đôi mắt hiền\r\n\r\nMới hôm qua còn an nhiên\r\n\r\nHôm nay là như vậy làm sao anh xoay chuyển đây\r\n\r\nAnh đã từng ngã vì nụ cười xinh\r\n\r\nTa đã từng gọi nhau là người tình\r\n\r\nTa đã từng coi nhau là hạnh phúc, có lẽ nỗi buồn luôn là điều ngoài dự tính\r\n\r\nPhố đã yên giờ thêm lắng, hàng cây đã không còn xen nắng\r\n\r\nCơn mưa sẽ không còn ấm êm ly cafe của anh càng thêm đường càng thêm đắng\r\n\r\nĐừng nói với anh ta đã chưa từng đậm sâu\r\n\r\nNói với anh ta cần nhau\r\n\r\nNói với anh ta sẽ hạnh phúc nhưng không cần phải qua thêm một lần đau\r\n\r\nĐừng làm nhớ thương kia dần lấp lối\r\n\r\nEm đừng làm căn phòng anh đầy ấp khói\r\n\r\nEm đừng biến nụ hôn này trở thành dĩ vãng\r\n\r\nThôi đừng để lời hứa ta trao phải hấp hối Nơi đây..\r\n\r\nmưa vẫn còn rơi rơi, hàng cây đó càng chơi vơi\r\n\r\nYêu dấu ngày cũ đó thôi cứ để cuốn trôi đi\r\n\r\nĐâu còn nước mắt chắc là khô luôn cả đôi mi\r\n\r\nEm vẫn luôn vô tư, thứ ta xa nhau vẫn vô lý\r\n\r\nUống mà vẫn không say rượu kia hẳng là vô vị\r\n\r\nKhông em ở quanh đây anh như kẻ đang vô tri\r\n\r\nChúng ta làm nhau đau ok chắc là cố ý\r\n\r\nĐi ngang qua nhau vậy như ta chưa từng có gì\r\n\r\nVers 2 :\r\n\r\nCó lẽ yêu thương bao lâu này giờ buông, là buông\r\n\r\nCó lẽ em cứ, vương vấn mãi, câu chuyện buồn (mãi câu… chuyện buồn)\r\n\r\nĐến hết đêm nay thôi, ngày mai lòng này sẽ khác\r\n\r\nNhưng không, tim anh vẫn nhớ mùa đông\r\n\r\nVậy giờ anh làm sao, làm sao có thể quên yêu thương ngày nào\r\n\r\nNhững ngày anh có em, vòng tay đơn sơ ấm áp\r\n\r\nVậy giờ đây thì sao, thì sao em ở đâu khi anh 1 mình\r\n\r\nTình yêu đầu tiên khắc sâu, dưới gốc hiên nhà có mưa…",
			song_duration: "04:45",
			author_name: "Đạt G",
			artist_name: "Đạt G ft Binz",
			author_id: null,
			artist_id: 4,
			category_id: 1,
		},
		{
			id: 83,
			album_code: "13AL-1668850060902",
			song_id: 7,
			song_name: "Payphone",
			song_cover: "song_payphone.jpg_1667722206608.jpeg",
			song_path: "song_Payphone-Maroon5.mp3_1667722206611.mpeg",
			song_lyric:
				"I'm at a payphone trying to call home\r\nAll of my change I spent on you\r\nWhere have the times gone\r\nBaby it's all wrong, where are the plans we made for two?\r\n\r\nYeah, I, I know it's hard to remember\r\nThe people we used to be\r\nIt's even harder to picture\r\nThat you're not here next to me\r\nYou say it's too late to make it\r\nBut is it too late to try?\r\nAnd in our time that you wasted\r\nAll of our bridges burned down\r\n\r\nI've wasted my nights\r\nYou turned out the lights\r\nNow I'm paralyzed\r\nStill stuck in that time when we called it love\r\nBut even the sun sets in paradise\r\n\r\nI'm at a payphone trying to call home\r\nAll of my change I spent on you\r\nWhere have the times gone\r\nBaby it's all wrong, where are the plans we made for two?\r\n\r\nIf happy ever after did exist\r\nI would still be holding you like this\r\nAll those fairytales are full of sh*t\r\nOne more stupid love song I'll be sick\r\n\r\nYou turned your back on tomorrow\r\nCause you forgot yesterday\r\nI gave you my love to borrow\r\nBut just gave it away\r\nYou can't expect me to be fine\r\nI don't expect you to care\r\nI know I've said it before\r\nBut all of our bridges burned down\r\n\r\nI've wasted my nights\r\nYou turned out the lights\r\nNow I'm paralyzed\r\nStill stucked in that time when we called it love\r\nBut even the sun sets in paradise\r\n\r\nI'm at a payphone trying to call home\r\nAll of my change I spent on you\r\nWhere have the times gone\r\nBaby it's all wrong, where are the plans we made for two?\r\n\r\nIf happy ever after did exist\r\nI would still be holding you like this\r\nAll those fairytales are full of sh*t\r\nOne more stupid love song I'll be sick\r\n\r\nNow I'm at a payphone...",
			song_duration: "03:51",
			author_name: "Maroon 5",
			artist_name: "Maroon 5",
			author_id: null,
			artist_id: 4,
			category_id: 3,
		},
		{
			id: 84,
			album_code: "13AL-1668850060902",
			song_id: 5,
			song_name: "Khóc",
			song_cover: "song_dong-nhi-khoc-1736.jpg_1667381263681.jpeg",
			song_path: "song_Khoc-DongNhi.mp3_1667381268065.mpeg",
			song_lyric:
				"Tình tan vỡ\r\nMột mình bước trong đêm\r\nTìm lại những giấc mơ\r\nXưa anh của ngày xưa ấm êm\r\nNào ngờ cơn gió\r\nĐã mang sương đến vây kín\r\nChe lấp ánh sáng nơi chân trời\r\nNước mắt tràn bờ mi\r\nLòng đau xót nghe trái tim khóc trong lặng câm\r\nMà vì sao tình em giờ đây vẫn mãi chờ người\r\nChờ tháng năm yêu ngày xưa giờ mong mãi\r\nNgày anh đi trời mưa phùn rơi thấm ướt đường dài\r\nĐể em ngồi lặng nhìn theo bóng anh\r\nLệ cay khóe vì một người đã ra đi không trở về\r\nNhưng nước mắt đó cũng chỉ làm vết thương thêm đau\r\nVì sao em lại khóc\r\nVì sao em lại nhớ\r\nDẫu biết anh chẳng còn như lúc xưa\r\nLệ cay khóe vì một người đã đi mang theo giấc mơ\r\nNơi đó chôn giấu ký ức cùng tháng năm êm đềm\r\nVì anh đã đi mãi\r\nVì em còn yêu anh\r\nDẫu biết anh chẳng còn nhớ đến em\r\nGiọt sầu hờn cay\r\nGiọt sầu lệ tuôn\r\nGiọt buồn lệ rơi nào ai muốn\r\nSao không cho bao nhiêu yêu thương kia nằm xuống kia\r\nĐể rồi cuốn xa\r\nKhi đôi môi nhạt nhoà giấc mơ dấu vết tình buồn ta\r\nDù cách xa nhói lòng\r\nDù biết nhớ hoài công\r\nKhông gian bao la mênh mông mang đi hoà tan nước mắt trong em\r\nKhóc âm thầm mưa rơi\r\nĐêm sầu đơn côi\r\nSao tim em vẫn chở một nỗi sầu bơ vơ\r\nDù biết anh sẽ không về đâu\r\nVì bao nhiêu lời thề đầu\r\nEm chôn sâu vào trong nỗi nhớ tình đầu rồi\r\nĐành khóc vậy thôi\r\nĐành khóc vậy thôi\r\nThế sao không quên anh đi\r\nCho bao nhiêu nước mắt bao nhiêu đau thương\r\nKhông còn rơi trên bờ mi héo úa\r\nVì anh không như lời anh hứa\r\nAnh đã không như ngày xưa\r\nTay trong tay vai kề vai trên con đường về đón đưa\r\nThì quên nhau đi được chưa\r\nVì anh là thế đó\r\nAnh như gió nồng nàn bên mây rồi mây tan\r\nTình cũng tan\r\nGió vội vàng như anh xa rồi\r\nĐừng trách vì gió vô tình người ơi\r\nTình đầu giọt lệ sầu\r\nCũng khô mang theo thời gian\r\nHãy tìm lối đi riêng như anh đi tìm cuộc sống mới\r\nEm khóc để quên sầu quên anh và quên niềm đau\r\nThì xin em hãy khóc\r\nLệ cay khóe vì một người đã ra đi không trở về\r\nNhưng nước mắt đó cũng chỉ làm vết thương thêm đau\r\nVì sao em lại khóc\r\nVì sao em lại nhớ\r\nDẫu biết anh chẳng còn như lúc xưa\r\nLệ cay khóe vì một người đã đi mang theo giấc mơ\r\nNơi đó chôn giấu ký ức cùng tháng năm êm đềm\r\nVì anh đã đi mãi\r\nVì em còn yêu anh\r\nDẫu biết anh chẳng còn nhớ đến em\r\nLệ cay khoé vì một người đã ra đi không trở về\r\nNhưng nước mắt đó cũng chỉ làm vết thương thêm đau\r\nVì sao em lại khóc\r\nVì sao em lại nhớ\r\nDẫu biết anh chẳng còn như lúc xưa (dẫu biết em chẳng còn như lúc xưa)\r\nLệ cay khóe vì một người đã đi mang theo giấc mơ\r\nNơi đó chôn giấu ký ức cùng tháng năm êm đềm\r\nVì anh đã đi mãi\r\nVì em còn yêu anh\r\nDẫu biết anh chẳng còn nhớ đến em",
			song_duration: "04:42",
			author_name: "Đông Nhi",
			artist_name: "Đông Nhi ft Rapper không tên",
			author_id: null,
			artist_id: null,
			category_id: 1,
		},
		{
			id: 85,
			album_code: "13AL-1668850060902",
			song_id: 8,
			song_name: "Muộn rồi mà sao còn",
			song_cover: "song_muonroimasaocon.jpg_1668915908035.jpeg",
			song_path: "song_MuonRoiMaSaoCon-SonTungMTP.mp3_1668915908036.mpeg",
			song_lyric:
				"Muộn rồi mà sao còn\r\nNhìn lên trần nhà rồi quay ra lại quay vào\r\nNằm trằn trọc vậy đến sáng mai\r\nÔm tương tư nụ cười của ai đó\r\nLàm con tim ngô nghê như muốn khóc oà\r\nVắt tay lên trên trán mơ mộng\r\nĐược đứng bên em trong nắng xuân hồng\r\nMột giờ sáng\r\nTrôi qua trôi nhanh kéo theo ưu phiền miên man\r\nÂm thầm gieo tên em vẽ lên hi vọng\r\nĐúng là yêu thật rồi còn không thì hơi phí này\r\nCứ thế loanh quanh loanh quanh loanh quanh lật qua lật lại hai giờ\r\nNhững ngôi sao trên cao\r\nLà người bạn tâm giao\r\nLắng nghe anh luyên thuyên về một tình đầu đẹp tựa chiêm bao\r\nCó nghe thôi đã thấy ngọt ngào đủ biết anh si mê em nhường nào\r\nÍt khi văn thơ anh dạt dào bụng đói nhưng vui quên luôn cồn cào\r\nNắm đôi tay kiêu sa\r\nĐược một lần không ta\r\nNghĩ qua thôi con tim trong anh đập tung lên rung nóc rung nhà\r\nHoá ra yêu đơn phương một người\r\nHoá ra khi tơ vương một người\r\nBa giờ đêm vẫn ngồi cười\r\nCứ ôm anh đi ôm anh đi ôm anh đi ôm anh đi\r\nÔm trong cơn mơ trong cơn mơ trong cơn mơ ôm trong cơn mơ\r\nCó thế cũng khiến anh vui điên lên\r\nNgỡ như em đang bên\r\nChắp bút đôi ba câu thơ ngọt ngào\r\nMuốn em đặt tên\r\nCứ ôm anh đi ôm anh đi ôm anh đi ôm anh đi\r\nÔm trong giấc mơ trong cơn mơ trong cơn mơ ôm trong cơn mơ\r\nYêu đến vậy thôi phát điên rồi làm sao giờ\r\nChịu\r\nĐêm nay không ngủ tay kê lên tủ\r\nMiên man anh tranh thủ\r\nChơi vơi suy tư bao nhiêu cho đủ\r\nYêu em ngu ngơ mình tôi\r\nYêu không quan tâm ngày trôi\r\nYêu ánh mắt bờ môi\r\nYêu đơn phương vậy thôi\r\nLại còn chối\r\nCon tim thẹn thùng đập lạc lối liên hồi\r\nĐừng chày cối\r\nMiệng cười cả ngày vậy là chết toi rồi\r\nNgày càng nhiều thêm\r\nTình yêu cho em ngày càng nhiều thêm\r\nMuốn nắm đôi bàn tay đó một lần\r\nDu dương chìm sâu trong từng câu ca dịu êm\r\nNhững ngôi sao trên cao là người bạn tâm giao\r\nLắng nghe anh luyên thuyên về một tình đầu đẹp tựa chiêm bao\r\nCó nghe tôi đã thấy ngọt ngào đủ biết anh si mê em nhường nào\r\nÍt khi văn thơ anh dạt dào bụng đói nhưng vui quên luôn cồn cào\r\nNắm đôi tay kiêu sa\r\nĐược một lần không ta\r\nNghĩ qua thôi con tim trong anh đập tung lên rung nóc rung nhà\r\nHoá ra yêu đơn phương một người\r\nHoá ra khi tơ vương một người\r\nBa giờ đêm vẫn ngồi cười\r\nCứ ôm anh đi ôm anh đi ôm anh đi ôm anh đi\r\nÔm trong cơn mơ trong cơn mơ trong cơn mơ ôm trong cơn mơ\r\nCó thế cũng khiến anh vui điên lên\r\nNgỡ như em đang bên\r\nChắp bút đôi ba câu thơ ngọt ngào\r\nMuốn em đặt tên\r\nCứ ôm anh đi ôm anh đi ôm anh đi ôm anh đi\r\nÔm trong giấc mơ trong cơn mơ trong cơn mơ ôm trong cơn mơ\r\nYêu đến vậy thôi phát điên rồi làm sao giờ\r\nEm xinh như một thiên thần\r\nNhư một thiên thần\r\nNhư một thiên thần\r\nNgỡ như em là thiên thần\r\nXinh như một thiên thần\r\nNhư một thiên thần\r\nEm xinh như một thiên thần\r\nNhư một thiên thần\r\nNhư một thiên thần\r\nNgỡ như em là thiên thần\r\nNgỡ như ngỡ như\r\nNgỡ như ngỡ như ngỡ như\r\nCứ ôm anh đi ôm anh đi ôm anh đi ôm anh đi\r\nÔm trong cơn mơ trong cơn mơ trong cơn mơ ôm trong cơn mơ\r\nCó thế cũng khiến anh vui điên lên\r\nNgỡ như em đang bên\r\nChắp bút đôi ba câu thơ ngọt ngào\r\nMuốn em đặt tên\r\nCứ ôm anh đi ôm anh đi ôm anh đi ôm anh đi\r\nÔm trong giấc mơ trong cơn mơ trong cơn mơ ôm trong cơn mơ\r\nYêu đến vậy thôi phát điên rồi làm sao giờ",
			song_duration: "04:35",
			author_name: "Duy Duc Nguyen",
			artist_name: "Sơn Tùng MTP",
			author_id: null,
			artist_id: 5,
			category_id: 1,
		},
	];
	return res.status(200).send({ success: true, message: data });
});
app.get("/album/getone/:album_code", async (req, res) => {
	const data = {
		id: 6,
		user_id: 5,
		album_name: "Sky tour",
		album_code: "13AL-1668850060902",
		album_desc:
			"Sky Tour là một bộ phim tài liệu âm nhạc của ca sĩ, nhạc sĩ người Việt Nam Sơn Tùng M-TP về chuyến lưu diễn Sky Tour năm 2019 trước thềm phát hành album Chúng ta. Bộ phim bắt đầu khởi chiếu tại các rạp phim trên toàn quốc vào ngày 12 tháng 6 năm",
		album_cover: "album_phim-sky-tour.jpg_1668850060897.jpeg",
		album_status: "public",
		created_at: "2022-11-19",
		updated_at: "2022-11-19",
	};
	return res.status(200).send({ success: true, message: data });
});
app.post("/album/addsongtoalbum", async (req, res) => {
	return res.status(200).send({ success: true, message: "Successfully" });
});
app.delete("/album/delete/:album_code", async (req, res) => {
	return res.status(200).send({ success: true, message: "Successfully" });
});
app.get("/album/search/:keywords", async (req, res) => {
	const data = [
		{
			id: 6,
			user_id: 5,
			album_name: "Sky tour",
			album_code: "13AL-1668850060902",
			album_desc:
				"Sky Tour là một bộ phim tài liệu âm nhạc của ca sĩ, nhạc sĩ người Việt Nam Sơn Tùng M-TP về chuyến lưu diễn Sky Tour năm 2019 trước thềm phát hành album Chúng ta. Bộ phim bắt đầu khởi chiếu tại các rạp phim trên toàn quốc vào ngày 12 tháng 6 năm",
			album_cover: "album_phim-sky-tour.jpg_1668850060897.jpeg",
			album_status: "public",
			created_at: "2022-11-19",
			updated_at: "2022-11-19",
		},
	];
	return res.status(200).send({ success: true, message: data });
});
/********************* Category API: ***************************/
app.post("/category/addnew", async (req, res) => {
	return res.status(200).send({ success: true, message: "Successfully" });
});
app.get("/category/getall/:limit", async (req, res) => {
	const data = [
		{
			id: 1,
			category_name: "VPOP",
			category_img: "category_1512556174027-4b6a.jpg_1666947637185.jpeg",
			category_desc:
				"V-pop (xuất phát từ tiếng Anh: Vietnamese pop), còn gọi là nhạc pop Việt Nam, nhạc trẻ Việt Nam hay nhạc đại chúng Việt Nam",
			category_status: "hien",
		},
		{
			id: 2,
			category_name: "KPOP",
			category_img: "category_e315e6621ddd9dc238459a2e682e70be.jpg_1666947739080.jpeg",
			category_desc:
				"K-pop, viết tắt của cụm từ tiếng Anh Korean popular music tức nhạc pop tiếng Hàn hay nhạc pop Hàn Quốc, là một thể loại âm nhạc bắt nguồn từ Hàn Quốc như một phần của văn hóa Hàn Quốc.",
			category_status: "hien",
		},
		{
			id: 3,
			category_name: "US-UK",
			category_img: "category_1482981697476_500.jpg_1666947805777.jpeg",
			category_desc:
				"US-UK hay US&UK, USUK (còn gọi là nhạc Âu Mỹ) là một thuật ngữ phổ biến ở Việt Nam dùng để chỉ nền âm nhạc đại chúng của đa số các quốc gia nói tiếng Anh",
			category_status: "hien",
		},
	];
	return res.status(200).send({ success: true, message: data });
});
/********************* Post API: ***************************/
app.post("/post/addnew", async (req, res) => {
	return res.status(200).send({ success: true, message: "Successfully" });
});
app.get("/post/getall/:limit/:pages", async (req, res) => {
	const data = [
		{
			id: 1,
			post_image: "post_binz-13.jpg_1668396040579.jpeg",
			post_content:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem",
			user_id: 4,
			created_at: "2022-11-14",
			updated_at: "2022-11-15",
		},
		{
			id: 3,
			post_image: "post_sontungpost1.jpg_1668846250602.jpeg",
			post_content:
				"Sau bao tháng ngày chờ đợi, M-TP Entertainment cuối cùng cũng đã hoàn thành thêm một không gian mới cho văn phòng rồi.\r\n🙏🏼🙏🏼🙏🏼\r\nMột không gian làm việc mới được mở rộng, năng động và hứa hẹn những dự án đột phá hơn nữa từ M-TP Entertainment.\r\nHy vọng những điều mới mẻ này sẽ thúc đẩy con thuyền M-TP Entertainment vững bước và tiến xa hơn về phía trước !!!\r\n🌻🌻🌻\r\nMỘT NGÀY TUYỆT VỜI !\r\n🕊🕊🕊",
			user_id: 5,
			created_at: "2022-11-19",
			updated_at: "2022-11-19",
		},
		{
			id: 4,
			post_image: "post_sontungpost2.jpg_1668846331381.jpeg",
			post_content:
				"Tiếp theo trong hành trình Dreams In The Sky, Tùng cùng M-TP Entertainment đã có mặt tại buổi “Lễ Khởi Công Trường Mầm Non Pú Súa, huyện Mường Ảng, tỉnh Điện Biên”.\r\n🕊️🕊️🕊️\r\nChân thành cảm ơn Phòng Giáo dục và Đào tạo huyện Mường Ảng, Ban Giám Hiệu nhà trường, cùng chính quyền địa phương và toàn thể các quý thầy cô đã cho Tùng có cơ hội được đến thăm và đóng góp một phần nhỏ vào công cuộc giáo dục cho tỉnh Điện Biên. Hy vọng rằng công trình tuyệt vời này sẽ giúp các “mầm non” tại nơi đây mỗi một ngày đến trường lại có một niềm vui mới, và giúp đội ngũ nhà giáo yên tâm công tác, cống hiến hết mình trong sứ mệnh trồng người.\r\nĐây là điểm đến thứ tư và cũng là điểm đến cuối cùng của chặng đường đầu tiên của Dreams In The Sky, thuộc chuỗi dự án Sky Decade dành tặng người hâm mộ nhân kỷ niệm một thập kỷ cùng SKY. Hành trình Dreams In The Sky này có lẽ là hành trình đầu tiên của Sơn Tùng M-TP và M-TP Entertainment dành đến cho cộng đồng, nhưng chắc chắn không phải là hành trình cuối cùng. Sẽ còn rất nhiều những chương khác của Dreams In The Sky mà Tùng muốn dành tặng đến cộng đồng trên toàn quốc và khắp mọi tỉnh thành trong tương lai. Hãy đón chờ những bất ngờ tiếp theo của Dreams In The Sky nhéee !!!\r\nXin chân thành cảm ơn và hẹn gặp lại!",
			user_id: 5,
			created_at: "2022-11-19",
			updated_at: "2022-11-19",
		},
		{
			id: 5,
			post_image: "post_sontungpost3.jpg_1668847866128.jpeg",
			post_content:
				"Quả là một ngày tuyệt vời khi được trở về với ngôi trường cấp 3 của Tùng, nơi đã gắn liền với tuổi thơ của Tùng, nơi đã chắp cánh ước mơ cho Tùng trở thành NGUYỄN THANH TÙNG của ngày hôm nay…! \r\nTùng cảm thấy rất vui và tự hào vì Tùng và M-TP TEAM đã có cơ hội làm một điều gì đó cho những bạn học sinh giỏi có hoàn cảnh đặc biệt tại ngôi trường của chúng ta. \r\nMong rằng những phần học bổng này sẽ là món quà tinh thần ý nghĩa và là động lực thật lớn cho các em luôn tiến về phía trước và biến giấc mơ của mình trở thành hiện thực nhé…!!\r\n🌻🌻🌻\r\nXin chào và hẹn gặp lại nha, ngôi trường thân yêu của tôi ơi …!!",
			user_id: 5,
			created_at: "2022-11-19",
			updated_at: "2022-11-19",
		},
		{
			id: 6,
			post_image: "post_sontungpost4.jpg_1668847906878.jpeg",
			post_content: "Trên đường về với TUYÊN QUANG hôm quaaaa\r\nTUYÊN QUANG đẹp quá TUYÊN QUANG ơiii !!!\r\n🕊🕊🕊",
			user_id: 5,
			created_at: "2022-11-19",
			updated_at: "2022-11-19",
		},
		{
			id: 7,
			post_image: "post_sontungpost5.jpg_1668847948843.jpeg",
			post_content:
				"Một ngày thật là tuyệt vời của M-TP TEAM cùng V.E.O đã có mặt tại Trung Tâm Phục Hồi Chức Năng Người Khuyết Tật Thuỵ An.\r\nCảm ơn trung tâm Thuỵ An đã tạo điều kiện cho M-TP Entertainment có cơ hội được đến đây chia sẻ, thăm hỏi và lan toả những sự tích cực đến với những người có hoàn cảnh đặc biệt. \r\nCầu chúc những điều tuyệt vời đến với quý thầy cô, quý cán bộ của trung tâm cùng các bé. Mong rằng mọi người sẽ luôn có thật nhiều sức khoẻ và giữ trong tim những nụ cười thật tươi nhé!\r\n❤️❤️❤️",
			user_id: 5,
			created_at: "2022-11-19",
			updated_at: "2022-11-19",
		},
		{
			id: 8,
			post_image: "post_sontungpost6.jpg_1668847994073.jpeg",
			post_content: "Đi xem SKY TOURRRRR !!!\r\n🧋🧋🧋",
			user_id: 5,
			created_at: "2022-11-19",
			updated_at: "2022-11-19",
		},
	];
	return res.status(200).send({ success: true, message: data });
});
app.get("/post/getbyartist/:id", async (req, res) => {
	const data = [
		{
			id: 3,
			post_image: "post_sontungpost1.jpg_1668846250602.jpeg",
			post_content:
				"Sau bao tháng ngày chờ đợi, M-TP Entertainment cuối cùng cũng đã hoàn thành thêm một không gian mới cho văn phòng rồi.\r\n🙏🏼🙏🏼🙏🏼\r\nMột không gian làm việc mới được mở rộng, năng động và hứa hẹn những dự án đột phá hơn nữa từ M-TP Entertainment.\r\nHy vọng những điều mới mẻ này sẽ thúc đẩy con thuyền M-TP Entertainment vững bước và tiến xa hơn về phía trước !!!\r\n🌻🌻🌻\r\nMỘT NGÀY TUYỆT VỜI !\r\n🕊🕊🕊",
			user_id: 5,
			created_at: "2022-11-19",
			updated_at: "2022-11-19",
		},
		{
			id: 4,
			post_image: "post_sontungpost2.jpg_1668846331381.jpeg",
			post_content:
				"Tiếp theo trong hành trình Dreams In The Sky, Tùng cùng M-TP Entertainment đã có mặt tại buổi “Lễ Khởi Công Trường Mầm Non Pú Súa, huyện Mường Ảng, tỉnh Điện Biên”.\r\n🕊️🕊️🕊️\r\nChân thành cảm ơn Phòng Giáo dục và Đào tạo huyện Mường Ảng, Ban Giám Hiệu nhà trường, cùng chính quyền địa phương và toàn thể các quý thầy cô đã cho Tùng có cơ hội được đến thăm và đóng góp một phần nhỏ vào công cuộc giáo dục cho tỉnh Điện Biên. Hy vọng rằng công trình tuyệt vời này sẽ giúp các “mầm non” tại nơi đây mỗi một ngày đến trường lại có một niềm vui mới, và giúp đội ngũ nhà giáo yên tâm công tác, cống hiến hết mình trong sứ mệnh trồng người.\r\nĐây là điểm đến thứ tư và cũng là điểm đến cuối cùng của chặng đường đầu tiên của Dreams In The Sky, thuộc chuỗi dự án Sky Decade dành tặng người hâm mộ nhân kỷ niệm một thập kỷ cùng SKY. Hành trình Dreams In The Sky này có lẽ là hành trình đầu tiên của Sơn Tùng M-TP và M-TP Entertainment dành đến cho cộng đồng, nhưng chắc chắn không phải là hành trình cuối cùng. Sẽ còn rất nhiều những chương khác của Dreams In The Sky mà Tùng muốn dành tặng đến cộng đồng trên toàn quốc và khắp mọi tỉnh thành trong tương lai. Hãy đón chờ những bất ngờ tiếp theo của Dreams In The Sky nhéee !!!\r\nXin chân thành cảm ơn và hẹn gặp lại!",
			user_id: 5,
			created_at: "2022-11-19",
			updated_at: "2022-11-19",
		},
		{
			id: 5,
			post_image: "post_sontungpost3.jpg_1668847866128.jpeg",
			post_content:
				"Quả là một ngày tuyệt vời khi được trở về với ngôi trường cấp 3 của Tùng, nơi đã gắn liền với tuổi thơ của Tùng, nơi đã chắp cánh ước mơ cho Tùng trở thành NGUYỄN THANH TÙNG của ngày hôm nay…! \r\nTùng cảm thấy rất vui và tự hào vì Tùng và M-TP TEAM đã có cơ hội làm một điều gì đó cho những bạn học sinh giỏi có hoàn cảnh đặc biệt tại ngôi trường của chúng ta. \r\nMong rằng những phần học bổng này sẽ là món quà tinh thần ý nghĩa và là động lực thật lớn cho các em luôn tiến về phía trước và biến giấc mơ của mình trở thành hiện thực nhé…!!\r\n🌻🌻🌻\r\nXin chào và hẹn gặp lại nha, ngôi trường thân yêu của tôi ơi …!!",
			user_id: 5,
			created_at: "2022-11-19",
			updated_at: "2022-11-19",
		},
		{
			id: 6,
			post_image: "post_sontungpost4.jpg_1668847906878.jpeg",
			post_content: "Trên đường về với TUYÊN QUANG hôm quaaaa\r\nTUYÊN QUANG đẹp quá TUYÊN QUANG ơiii !!!\r\n🕊🕊🕊",
			user_id: 5,
			created_at: "2022-11-19",
			updated_at: "2022-11-19",
		},
		{
			id: 7,
			post_image: "post_sontungpost5.jpg_1668847948843.jpeg",
			post_content:
				"Một ngày thật là tuyệt vời của M-TP TEAM cùng V.E.O đã có mặt tại Trung Tâm Phục Hồi Chức Năng Người Khuyết Tật Thuỵ An.\r\nCảm ơn trung tâm Thuỵ An đã tạo điều kiện cho M-TP Entertainment có cơ hội được đến đây chia sẻ, thăm hỏi và lan toả những sự tích cực đến với những người có hoàn cảnh đặc biệt. \r\nCầu chúc những điều tuyệt vời đến với quý thầy cô, quý cán bộ của trung tâm cùng các bé. Mong rằng mọi người sẽ luôn có thật nhiều sức khoẻ và giữ trong tim những nụ cười thật tươi nhé!\r\n❤️❤️❤️",
			user_id: 5,
			created_at: "2022-11-19",
			updated_at: "2022-11-19",
		},
		{
			id: 8,
			post_image: "post_sontungpost6.jpg_1668847994073.jpeg",
			post_content: "Đi xem SKY TOURRRRR !!!\r\n🧋🧋🧋",
			user_id: 5,
			created_at: "2022-11-19",
			updated_at: "2022-11-19",
		},
	];
	return res.status(200).send({ success: true, message: data });
});
app.delete("/post/delete/:id", async (req, res) => {
	return res.status(200).send({ success: true, message: "Successfully" });
});
app.put("/post/edit", async (req, res) => {
	return res.status(200).send({ success: true, message: "Successfully" });
});

const port = process.env.serverport || 4000;
app.listen(port, () => console.log(`Running on port ${port}...`));
