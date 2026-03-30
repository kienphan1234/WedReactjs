import { useParams } from 'react-router-dom';

const CollectionPage = () => {
  const { type } = useParams(); // Lấy chữ 'loa' hoặc 'amply' từ thanh địa chỉ

  // Giả lập dữ liệu (Sau này bạn gọi API hoặc Import từ file data riêng)
  const products = [
    { id: 1, name: "Loa Karaoke JBL Bãi Nhật", category: "loa", price: "15.000.000", img: "https://picsum.photos/400/400" },
    { id: 2, name: "Amply Jarguar 506N", category: "amply", price: "8.500.000", img: "https://picsum.photos/400/401" },
    { id: 3, name: "Micro Shure UGX10", category: "micro", price: "2.500.000", img: "https://picsum.photos/400/402" },
  ];

  // Lọc sản phẩm đúng loại
  const filteredItems = products.filter(item => item.category === type);

  return (
    <div className="pt-28 pb-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Tiêu đề trang */}
        <div className="mb-8 border-b-2 border-blue-700 pb-4">
          <h1 className="text-3xl font-bold uppercase text-gray-800">
            Danh mục: <span className="text-blue-700">{type}</span>
          </h1>
        </div>

        {/* Lưới sản phẩm */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-all">
              <div className="relative overflow-hidden aspect-square">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-700 mb-2 line-clamp-2 h-12">{item.name}</h3>
                <p className="text-red-600 font-bold text-xl">{item.price}đ</p>
                <button className="w-full mt-4 bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition-colors uppercase text-sm font-bold">
                  Chi tiết
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && <p className="text-center py-20 text-gray-500">Chưa có sản phẩm nào trong mục này.</p>}
      </div>
    </div>
  );
};

export default CollectionPage;