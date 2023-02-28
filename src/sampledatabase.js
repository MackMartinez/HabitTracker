// Sample user data


let users = [
  { id: 1,
    firstname: "Clark",
    lastname: "Kent",
    email: "clark.kent@metropolis.com",
    password: "hero1"
  },
  {
    id: 2,
    firstname: "Bruce",
    lastname: "Wayne",
    email: "bruce.wayne@gotham.com",
    password: "hero2"
  }
];

let days = [
  {
    id: 1,
    day: "Monday"
  },
  {
    id: 2,
    day: "Tuesday"
  },
  {
    id: 3,
    day: "Wednesday"
  },
  {
    id: 4,
    day: "Thursday"
  },
  {
    id: 5,
    day: "Friday"
  }
];

let habits = [
  { "1" : [{ // The key for this section is the user id and is used to aggregate the habits

      id: 1, // habit id key
      days_id: 1,
      name: "flying",
      notes: "Practice levatating for 1 hour per day"
    },
    {
      id: 2,
      days_id: 2,
      name: "Stength building",
      notes: "Lift a 2 ton rock for 30 minutes"
    }]
  },
  { "2" : [{

      id: 3,
      days_id: 5,
      name: "Throwing",
      notes: "Practice throwing a boomerang 30 minutes per day" // We should probably add time to the table
    },
    {
      id: 4,
      days_id: 1,
      name: "Hiding",
      notes: "Practice being invisible all day"
    }]
  },

]