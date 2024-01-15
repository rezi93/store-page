export interface IProduct {
    
        

      

      id: number,
      title: string,
      description: string,
      price: number,
      discountPercentage: number,
      rating: number,
      stock: number,
      brand: string,
      category: string,
      thumbnail: string,
      images: string[]
}

export enum ICategory{
  smartphones="smartphones",
  laptops="laptops",
  fragrances="fragrances",
  skincare="skincare",
  groceries="groceries",
  homedecoration="home-decoration",
  furniture="furniture",
  tops="tops",
  
  womendresses="womens-dresses",
  womenshoes="womens-shoes",
  menshirts="mens-shirts",
  menshoes="mens-shoes",
  menwatches="mens-watches",
  womenwatches="womens-watches",
  womenbags="womens-bags",
  womenjewellery="womens-jewellery",
  sunglasses="sunglasses",
  automotive="automotive",
  motorcycle="motorcycle",
  lighting="lighting"
}

export interface IMenuItem{
  label:string,
  icon:string
}

export interface IBaseResponsive{
  total: number,
  skip: number,
  limit: number,
  products:IProduct[]
}
