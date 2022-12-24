moviesListObj = [
  {
    id: "1",
    title: "The Incredible Hulk",
    release_date: "2008-06-12",
  },
  {
    id: "2",
    title: "Iron Man",
    release_date: "2008-04-30",
  },
  {
    id: "3",
    title: "Iron Man 2",
    release_date: "2010-04-28",
  },
  {
    id: "4",
    title: "Thor",
    release_date: "2011-04-21",
  },
  {
    id: "5",
    title: "Captain America: The First Avenger",
    release_date: "2011-07-22",
  },
  {
    id: "6",
    title: "The Avengers",
    release_date: "2012-04-25",
  },
  {
    id: "7",
    title: "Iron Man 3",
    release_date: "2013-04-18",
  },
  {
    id: "8",
    title: "Thor: The Dark World",
    release_date: "2013-10-29",
  },
  {
    id: "9",
    title: "Captain America: The Winter Soldier",
    release_date: "2014-03-20",
  },
  {
    id: "10",
    title: "Guardians of the Galaxy",
    release_date: "2014-07-30",
  },
  {
    id: "11",
    title: "Avengers: Age of Ultron",
    release_date: "2015-04-22",
  },
  {
    id: "12",
    title: "Ant-Man",
    release_date: "2015-07-14",
  },
  {
    id: "13",
    title: "Captain America: Civil War",
    release_date: "2016-04-27",
  },
  {
    id: "14",
    title: "Doctor Strange",
    release_date: "2016-10-25",
  },
  {
    id: "15",
    title: "Guardians of the Galaxy Vol. 2",
    release_date: "2017-04-19",
  },
  {
    id: "16",
    title: "Spider-Man: Homecoming",
    release_date: "2017-07-05",
  },
  {
    id: "17",
    title: "Thor: Ragnarok",
    release_date: "2017-10-25",
  },
  {
    id: "18",
    title: "Black Panther",
    release_date: "2018-02-13",
  },
  {
    id: "19",
    title: "Avengers: Infinity War",
    release_date: "2018-04-25",
  },
  {
    id: "20",
    title: "Ant-Man and the Wasp",
    release_date: "2018-07-04",
  },
  {
    id: "21",
    title: "Captain Marvel",
    release_date: "2019-03-08",
  },
  {
    id: "22",
    title: "Avengers: Endgame",
    release_date: "2019-04-26",
  },
  {
    id: "23",
    title: "Spider-Man: Far From Home",
    release_date: "2019-07-05",
  },
  {
    id: "24",
    title: "Black Widow",
    release_date: "2021-07-09",
  },
  {
    id: "25",
    title: "Shang-Chi and the Legend of the Ten Rings",
    release_date: "2021-09-03",
  },
  {
    id: "26",
    title: "Eternals",
    release_date: "2021-11-05",
  },
  {
    id: "27",
    title: "Spider-Man: No Way Home",
    release_date: "2021-12-17",
  },
];

function createLi(matched) {
  const result = document.querySelector("ul");
  result.innerHTML = matched
    .map(function (item) {
      return `<li>${item.title}</li>`;
    })
    .join("\n");
}

function search(value, moviesListObj) {
  let matched = moviesListObj.filter(function (eachObj) {
    let lowerTitle = eachObj.title.toLowerCase();
    let lowerValue = value.toLowerCase();
    if (lowerTitle.search(lowerValue) != -1) {
      return true;
    } else {
      return false;
    }
  });
  createLi(matched);
}

const inputValue = document.querySelector("input");
inputValue.addEventListener("input", function (event) {
  let value = inputValue.value;
  console.log(value.length);
  if (value.length !== 0) {
    search(value, moviesListObj);
  } else {
    let reset = document.querySelector("ul");
    reset.innerHTML = `<li>(No Movies Matched)</li>`;
  }
});
