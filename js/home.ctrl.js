app.controller('MainCtrl', function($scope, $document, $timeout, $mdSidenav, $log) {


  $scope.animation = {};
    $scope.animation.current = 'fadeInUp';
    $scope.animation.previous = $scope.animation.current;
    $scope.ElementIn = function($el) {
  		$el.removeClass('not-visible');
  		$el.addClass('animated ' + $scope.animation.current);
  	};
  	$scope.animateElementOut = function($el) {
  		$el.addClass('not-visible');
  		$el.removeClass('animated ' + $scope.animation.current);
  	};


$scope.aboutUs = [
                {
                  "name":"Aviation and Tourism Sector",
                  "icon":"ti-truck"
                },
                {
                  "name":"Entertainment Sector",
                  "icon":"ti-music-alt"
                },
                {
                  "name":"Fashion Sector",
                  "icon":"ti-crown"
                },
                {
                  "name":"Logistics",
                  "icon":"ti-layout-media-right-alt"
                },
                {
                  "name":"Ports and Shipping",
                  "icon":"ti-shopping-cart"
                },
                {
                  "name":"Financial Institutions",
                  "icon":"ti-money"
                },
                {
                  "name":"FMCG Services",
                  "icon":"ti-package"
                },
                {
                  "name":"Ecommerce and Startup",
                  "icon":"ti-flag-alt"
                },
                {
                  "name":"Infrastructure, Factories and Real Estate",
                  "icon":"ti-server"
                }
];


$scope.aboutUs2 = [
                {
                  "name":"Why Choose Us",
                  "icon":"ti-pulse"
                },
                {
                  "name":"Our Mission",
                  "icon":"ti-stats-up"
                },
                {
                  "name":"What We Do",
                  "icon":"ti-bar-chart"
                }
];



$scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
    [8, 28, 80, 9, 172, 7, 30],
    [8, 56, 0, 27, 86, 28, 60]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }];
  $scope.options = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        }
      ]
    }
  };

});
