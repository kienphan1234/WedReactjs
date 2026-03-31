import { useState } from 'react';
import { FiPhone } from 'react-icons/fi';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);

  // Giả lập dữ liệu sản phẩm
  const product = {
    id: id,
    name: "Loa Karaoke JBL KP6012 G2 Professional",
    price: 15500000,
    oldPrice: 18000000,
    description: "Dòng loa cao cấp chuyên dụng cho phòng hát karaoke kinh doanh và gia đình. Bass 30cm, công suất mạnh mẽ, âm thanh trung thực.",
    specs: [
      { label: "Công suất", value: "350W - 1400W" },
      { label: "Tần số", value: "71Hz - 20kHz" },
      { label: "Trở kháng", value: "8 Ohms" },
      { label: "Trọng lượng", value: "14.7kg" }
    ],
    images: [
      "https://picsum.photos/600/600",
      "https://picsum.photos/600/601",
      "https://picsum.photos/600/602",
      "https://picsum.photos/600/603"
    ]
  };

  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-6">

        {/* Breadcrumb đơn giản */}
        <nav className="flex text-sm text-slate-500 mb-8 uppercase tracking-wider">
          <a href="/" className="hover:text-blue-600">Trang chủ</a>
          <span className="mx-2">/</span>
          <span className="text-slate-900 font-bold">Chi tiết sản phẩm</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* CỘT TRÁI: HÌNH ẢNH */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
              <img src={mainImage} alt={product.name} className="w-full h-full object-cover" />
            </div>
            {/* Ảnh nhỏ bên dưới */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setMainImage(img)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${mainImage === img ? 'border-blue-600' : 'border-transparent hover:border-slate-300'}`}
                >
                  <img src={img} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* CỘT PHẢI: THÔNG TIN MUA HÀNG */}
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-4 uppercase">
              {product.name}
            </h1>

            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-3xl font-black text-red-600">
                {product.price.toLocaleString('vi-VN')}đ
              </span>
              <span className="text-xl text-slate-400 line-through">
                {product.oldPrice.toLocaleString('vi-VN')}đ
              </span>
              <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold uppercase">
                Tiết kiệm 15%
              </span>
            </div>

            <div className="border-y border-slate-100 py-6 mb-6">
              <p className="text-slate-600 leading-relaxed italic">
                {product.description}
              </p>
            </div>

            {/* BẢNG THÔNG SỐ NHANH */}
            <div className="space-y-3 mb-8">
              {product.specs.map((spec, i) => (
                <div key={i} className="flex justify-between text-sm py-2 border-b border-slate-50">
                  <span className="text-slate-500 font-medium">{spec.label}</span>
                  <span className="text-slate-900 font-bold">{spec.value}</span>
                </div>
              ))}
            </div>
            {/* Cam kết cửa hàng */}
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xs font-bold text-green-600 bg-green-50 p-3 rounded-lg">
                BẢO HÀNH 12 THÁNG
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-blue-600 bg-blue-50 p-3 rounded-lg">
                GIAO HÀNG TOÀN QUỐC
              </div>
              <div className="flex items-center flex-1 gap-2 text-xs font-bold text-white bg-blue-500 p-3 rounded-lg">
                <FiPhone /> LIÊN HỆ 0912619294 - 0888533518 ĐỂ ĐẶT HÀNG
              </div>
            </div>
          </div>

        </div>

        {/* NỘI DUNG CHI TIẾT DƯỚI CÙNG */}
        <div className="mt-20">
          <div className="border-b-2 border-slate-200 mb-8">
            <span className="inline-block border-b-4 border-blue-600 pb-2 font-black uppercase tracking-tighter text-xl">
              Mô tả chi tiết
            </span>
          </div>
          <article className="prose prose-slate max-w-none text-slate-700 leading-loose">
            <p>
              Đây là nội dung mô tả sản phẩm của bạn. Bạn có thể sử dụng các thẻ như &lt;h2&gt;, &lt;p&gt;, &lt;ul&gt;
              để trình bày một cách rõ ràng nhất về tính năng, công nghệ và ứng dụng của thiết bị.
            </p>
            {/* Thêm ảnh minh họa ở đây nếu cần */}
          </article>
        </div>

      </div>
    </div>
  );
};

export default ProductDetailPage;