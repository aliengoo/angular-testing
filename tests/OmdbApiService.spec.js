import "angular-mocks";

describe("omdb service", function () {

  var expectedMovieData = {
    "Title": "Star Wars",
    "Year": "1983",
    "Rated": "N/A",
    "Released": "01 May 1983",
    "Runtime": "N/A",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "N/A",
    "Writer": "N/A",
    "Actors": "Harrison Ford, Alec Guinness, Mark Hamill, James Earl Jones",
    "Plot": "N/A",
    "Language": "English",
    "Country": "USA",
    "Awards": "N/A",
    "Poster": "N/A",
    "Metascore": "N/A",
    "imdbRating": "7.8",
    "imdbVotes": "345",
    "imdbID": "tt0251413",
    "Type": "game",
    "Response": "True"
  };

  beforeEach(angular.mock.module("app"));

  var omdbApiService;
  var $httpBackend;

  beforeEach(angular.mock.inject(function (_omdbApiService_, _$httpBackend_) {
    omdbApiService = _omdbApiService_;
    $httpBackend = _$httpBackend_;
  }));

  it("should search by title", function () {
    var query = "Star Wars";
    var actualData;
    $httpBackend
      .when("GET", `http://www.omdbapi.com/?v=1&s=${encodeURIComponent(query)}`)
      .respond(200, expectedMovieData);

    omdbApiService.search(query).then((data) => {
      actualData = data;
    });

    $httpBackend.flush();

    expect(actualData).toEqual(expectedMovieData);
  });
});
