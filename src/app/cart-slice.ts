import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  title: string;
  img: string;
  category: string;
  manufacturer: string;
  rating: number;
  price: number;
  stock: number;
  description: string;
  shopping: boolean;
  quantity: number;
}

interface CartState {
  products: Product[];
}

const initialState: CartState = {
  products: [
    {
      id: 1,
      title: "Paracetamol 500mg",
      img: "https://rejang.com.my/wp-content/uploads/2020/05/031-scaled.jpg",
      price: 2.5,
      stock: 150,
      category: "Pain Reliever",
      manufacturer: "MedLife Pharma",
      description:
        "Effective pain reliever and fever reducer, commonly used for headaches, muscle aches, and flu symptoms.",
      rating: 4.7,
      shopping: false,
      quantity: 0,
    },
    {
      id: 2,
      title: "Ibuprofen 200mg",
      img: "https://i.ebayimg.com/images/g/8bkAAOSw5e1gXnI-/s-l1200.jpg",
      price: 3.0,
      stock: 100,
      category: "Anti-Inflammatory",
      manufacturer: "HealthCare Ltd.",
      description:
        "Nonsteroidal anti-inflammatory drug (NSAID) used to relieve pain, fever, and inflammation.",
      rating: 4.5,
      shopping: false,
      quantity: 0,
    },
    {
      id: 3,
      title: "Amoxicillin 500mg",
      img: "https://5.imimg.com/data5/SELLER/Default/2024/5/423237267/FD/RQ/IM/51645087/amoxicillin-500mg-capsule.png",
      price: 8.0,
      stock: 75,
      category: "Antibiotic",
      manufacturer: "Global Pharma",
      description:
        "Broad-spectrum antibiotic used to treat various bacterial infections, including respiratory and skin infections.",
      rating: 4.8,
      shopping: false,
      quantity: 0,
    },
    {
      id: 4,
      title: "Cough Syrup 100ml",
      img: "https://zeelabpharmacy.com/public/uploads/files/MW6630f20702840-400X.png",
      price: 4.5,
      stock: 200,
      category: "Cold & Flu",
      manufacturer: "Wellness Meds",
      description:
        "Relieves cough and throat irritation with a soothing formula.",
      rating: 4.3,
      shopping: false,
      quantity: 0,
    },
    {
      id: 5,
      title: "Vitamin C 1000mg",
      img: "https://cdn11.bigcommerce.com/s-mhzobovg3g/images/stencil/1280x1280/products/4044/34687/NTA1791-1__73445.1706521777.jpg?c=2",
      price: 6.5,
      stock: 180,
      category: "Vitamins & Supplements",
      manufacturer: "NutriHealth",
      description:
        "Boosts immunity and supports overall health with high-dose Vitamin C.",
      rating: 4.9,
      shopping: false,
      quantity: 0,
    },
    {
      id: 6,
      title: "Aspirin 100mg",
      img: "https://cdn11.bigcommerce.com/s-d75m9rit2s/images/stencil/1280x1280/products/3160/152814/10038748413982.jpg_response-content-disposition_inline_filename_FIRS-9334820000188-0__38490.1680617872.jpg?c=1",
      price: 3.2,
      stock: 120,
      category: "Pain Reliever",
      manufacturer: "PharmaLife",
      description:
        "Helps reduce pain, fever, and inflammation. Often used for heart health.",
      rating: 4.6,
      shopping: false,
      quantity: 0,
    },
    {
      id: 7,
      title: "Omeprazole 20mg",
      img: "https://www.adegenpharma.com/wp-content/uploads/2023/02/OMILESS-20-CAPSULE.jpg",
      price: 7.5,
      stock: 90,
      category: "Acid Reducer",
      manufacturer: "DigestiveCare",
      description:
        "Reduces stomach acid production, commonly used for acid reflux and ulcers.",
      rating: 4.7,
      shopping: false,
      quantity: 0,
    },
    {
      id: 8,
      title: "Cetirizine 10mg",
      img: "https://smarthealer.pk/wp-content/uploads/2024/09/cetirizine-tablet.webp",
      price: 5.0,
      stock: 130,
      category: "Allergy Relief",
      manufacturer: "AllergyFree",
      description:
        "Relieves allergy symptoms such as runny nose, sneezing, and itchy eyes.",
      rating: 4.4,
      shopping: false,
      quantity: 0,
    },
    {
      id: 9,
      title: "Metformin 500mg",
      img: "https://mcareexports.com/wp-content/uploads/2022/05/Untitled-design-34.png",
      price: 10.0,
      stock: 60,
      category: "Diabetes Medication",
      manufacturer: "GlucoseControl",
      description:
        "Used to control high blood sugar in people with type 2 diabetes.",
      rating: 4.8,
      shopping: false,
      quantity: 0,
    },
    {
      id: 10,
      title: "Loratadine 10mg",
      img: "https://mcareexports.com/wp-content/uploads/2021/07/Lorapil-10mg-tab.jpg",
      price: 4.8,
      stock: 140,
      category: "Allergy Relief",
      manufacturer: "Wellness Meds",
      description: "Non-drowsy antihistamine that relieves allergy symptoms.",
      rating: 4.5,
      shopping: false,
      quantity: 0,
    },
    {
      id: 11,
      title: "Dextromethorphan 15mg",
      img: "https://taquechelpharmacy.com/wp-content/uploads/2023/09/puregen-cough-relief-dextromethorphan-hbr-15mg-60-softgels.jpg",
      price: 4.2,
      stock: 110,
      category: "Cough Suppressant",
      manufacturer: "MediCough",
      description:
        "Used to suppress coughs caused by colds or respiratory infections.",
      rating: 4.3,
      shopping: false,
      quantity: 0,
    },
    {
      id: 12,
      title: "Ranitidine 150mg",
      img: "https://cdn.sanity.io/images/zbeduy22/production/689996b81b017b69738bc90ea0207bf5bf2eb493-600x600.jpg",
      price: 6.0,
      stock: 100,
      category: "Acid Reducer",
      manufacturer: "DigestiveCare",
      description: "Reduces stomach acid and prevents heartburn.",
      rating: 4.6,
      shopping: false,
      quantity: 0,
    },
    {
      id: 13,
      title: "Azithromycin 250mg",
      img: "https://www.biofieldpharma.com/wp-content/uploads/2023/06/BIOFIELD-OZISET-250-TAB-1-scaled.jpg",
      price: 12.0,
      stock: 50,
      category: "Antibiotic",
      manufacturer: "Global Pharma",
      description:
        "Effective in treating bacterial infections such as pneumonia and bronchitis.",
      rating: 4.9,
      shopping: false,
      quantity: 0,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const product = state.products.find((p) => p.id === action.payload.id);
      if (product) {
        product.shopping = true;
        product.quantity += 1;
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const productId = parseInt(action.payload, 10);
      const product = state.products.find((p) => p.id === productId);
      if (product && product.quantity > 0) {
        product.quantity -= 1;
        if (product.quantity === 0) {
          product.shopping = false;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
