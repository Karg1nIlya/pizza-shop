interface IPizza {
  id: number,
  imageUrl: string,
  name: string,
  description: string,
  type: number[],
  size: number[],
  price: number[],
  category: number[],
  rating: number
}

// interface IInnerParams {
//     type: number,
//     state: string 
//   }
  
// interface IPizzaArr {
//   id: number,
//   imageUrl: string,
//   name: string,
//   description: string,
//   type: (IInnerParams)[],
//   size: IInnerParams[],
//   price: number[],
//   category: number[],
//   rating: number
// }

interface ICart {
  id: number,
  imageUrl: string,
  name: string,
  type: number,
  size: number,
  price: number,
  count: number
}

export type { IPizza, ICart }