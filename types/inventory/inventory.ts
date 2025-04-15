
interface price {
    id: string;    
    currency: string;
    tax: number;
    discount: number;
    price: number;
}

enum variantType {
    color = 'color',
    size = 'size',
    material = 'material',
    weight = 'weight',
    length = 'length',
    width = 'width',
    height = 'height',
}

interface variant {
    id: string;
    type: variantType;
    value: string;
}

interface image {
    id: string;
    Queue: number;
    url: string;
    alt: string;
    title: string;
}

export interface product {
    id: string;
    name: string;
    description?: string;
    barcode: string;
    sku: string;
    price: price;
    images: image[];
    brand: string;
    Guarantee: number;
    variant: variant;
}

export enum stockStatus {
    inStock = 'Stok var',
    outOfStock = 'Stok yok',
    discontinued = 'Satıştan kaldırıldı',
    limitedStock = 'Sınırlı stok',
    soldOut = 'Tükendi',

}

interface stock {
    id: string;
    productId: string;
    quantity: number;
    status: stockStatus;
}

enum actionType {
    In = 'Giriş',
    Out = 'Çıkış',
    Transfer = 'Transfer',
    Return = 'İade',
    Sale = 'Satış',
    Adjustment = 'Ayarlama',
    Scrap = 'Hurda',
    Lost = 'Kayıp',
    Damaged = 'Hasarlı',
    Expired = 'Son kullanma tarihi geçmiş',
}

interface actions {
    id: string;
    productId: string;
    type: actionType;
    quantity: number;
    date: Date;
    reason?: string;
}

export interface ResultInventory {
    id: string;
    product: product[];
    stock: stock[];
    actions: actions[];
}

export const resultInventory: ResultInventory = {
    id: "inv-001",
    product: [
      {
        id: "prod-001",
        name: "Nike Air Max 90",
        description: "Rahat ve şık günlük ayakkabı.",
        barcode: "8690123456789",
        sku: "NK-AM90-BLK-42",
        price: {
          id: "price-001",
          currency: "TRY",
          tax: 18,
          discount: 10,
          price: 2499.90
        },
        images: [
          {
            id: "img-001",
            Queue: 1,
            url: "https://example.com/images/nike-air-max.jpg",
            alt: "Nike Air Max 90 siyah",
            title: "Nike Air Max 90 - Siyah"
          },
          {
            id: "img-002",
            Queue: 2,
            url: "https://example.com/images/nike-air-max-side.jpg",
            alt: "Nike Air Max 90 yan görünüm",
            title: "Yan Görünüm"
          }
        ],
        brand: "Nike",
        Guarantee: 24, // ay
        variant: {
          id: "var-001",
          type: variantType.size,
          value: "42"
        }
      }
    ],
    stock: [
      {
        id: "stock-001",
        productId: "prod-001",
        quantity: 12,
        status: stockStatus.inStock
      }
    ],
    actions: [
      {
        id: "act-001",
        productId: "prod-001",
        type: actionType.In,
        quantity: 20,
        date: new Date("2025-04-01T10:30:00Z"),
        reason: "Yeni stok girişi"
      },
      {
        id: "act-002",
        productId: "prod-001",
        type: actionType.Sale,
        quantity: 5,
        date: new Date("2025-04-05T14:20:00Z"),
        reason: "Online satış"
      },
      {
        id: "act-003",
        productId: "prod-001",
        type: actionType.Damaged,
        quantity: 3,
        date: new Date("2025-04-10T09:15:00Z"),
        reason: "Depoda hasar gördü"
      }
    ]
  };
  