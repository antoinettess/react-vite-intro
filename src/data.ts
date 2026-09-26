export interface Way {
  id: number;
  title: string;
  description: string;
  price: number;
  time: string;
}

export interface Differences {
  way: string;
  accessibility: string;
  intensity: string;
}

export interface Master {
  name: string;
  role: string;
  slogan: string;
  experience: string;
  clients: string;
  city: string;
  address: string;
  workHours: string;
  phone: string;
}
export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
}

export const ways: Way[] = [
  {
    id: 1,
    title: "Оформление бровей",
    description:
      "Создаем идеальную форму и цвет, подчеркивая твою естественную красоту.",
    price: 1100,
    time: "40 минут",
  },
  {
    id: 2,
    title: "Ламинирование ресниц",
    description:
      "Ламинирование и окрашивание ресниц визуально увеличивают их длину на 10%, корректируют направление роста",
    price: 1600,
    time: "60 минут",
  },
  {
    id: 3,
    title: "Коррекция бровей",
    description:
      "Удаление лишних волосков разными способами: пинцетом, воском, нитью или сахарной пастой.",
    price: 600,
    time: "30 минут",
  },
  {
    id: 4,
    title: "Ламинирование бровей ",
    description:
      "Ламинирование бровей бережно укладывает волосок к волоску, возвращая утраченную форму и густоту перещипанным бровям.",
    price: 2000,
    time: "60 минут",
  },
];
export const differences: Differences = {
  way: "Работаю только с проверенными материалами. Всё стерильно и одноразово.",
  accessibility:
    "Принимаю в уютной студии в центре города и с выездом на дом — удобно для мам с детьми.",
  intensity:
    "Процедура занимает 40–60 минут, запись открыта на 2 недели вперёд. ",
};

export const master: Master = {
  name: "Анна Семина",
  role: " Мастер бровист и ламимейкер",
  slogan: "Создаю брови, которые подчёркивают вашу естественную красоту",
  experience: "5 лет опыта",
  clients: "600+ довольных клиентов",
  city: "Севастополь",
  address: "ул. Лазарева, 10, офис 5",
  workHours: "Пн–Сб 10:00–20:00",
  phone: "+7 (999) 999 99 99",
};

export const reviews: Review[] = [
  {
    id: 1,
    name: "Мария",
    rating: 5,
    text: "Обязательно вернусь.",
  },
  {
    id: 2,
    name: "Екатерина",
    rating: 5,
    text: "Очень довольна, рекомендую!",
  },
  {
    id: 3,
    name: "Ольга",
    rating: 4,
    text: "Результат отличный.",
  },
];
