import myBanner from '../assets/img_banner.jpg';
const Banner = () => {
  return (
    <section className="relative pt-24 md:p-24 w-full  flex items-center overflow-hidden">
      {/* 1. Hiệu ứng ánh sáng nền (Gradient Decor) */}
      <div className="max-w-7xl mx-auto p-6 grid md:grid-cols-2 gap-12 items-center z-10">

        {/* --- PHẦN CHỮ (BÊN TRÁI) --- */}
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl font-black text-blue-700 leading-none tracking-tighter">
            ÂM THANH
            <div className="mt-2 text-amber-500">
              ĐỈNH CAO
            </div>
          </h1>
          <p className="text-slate-400 text-lg max-w-md leading-relaxed">
            Khám phá bộ sưu tập Loa & Tai nghe Bluetooth mới nhất từ Marshall, JBL và Bose. Trải nghiệm chất âm chân thực trong từng nốt nhạc.
          </p>
        </div>

        {/* --- PHẦN ẢNH (BÊN PHẢI) --- */}
        <div className="relative group flex justify-center">
          <img
            src={myBanner}
            alt="Premium Speaker"
            className="relative w-full max-w-[500px] object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:-translate-y-5 rounded-lg cursor-pointer"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;