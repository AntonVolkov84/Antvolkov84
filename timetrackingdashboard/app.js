document.addEventListener('DOMContentLoaded', loadGo);
function loadGo(){
const data = [
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]
const activities = data.map(activity => new DashboardItem(activity));
const selectors = document.querySelectorAll('.view-selector__item');
selectors.forEach(selector =>
selector.addEventListener('click', function (){
	selectors.forEach(sel => sel.classList.remove('active'))
	selector.classList.add('active');

	const currentView = selector.innerText.trim().toLowerCase();
	activities.forEach(activity => activity.changeView(currentView));
})
	)
};	


class DashboardItem {
	static PERIODS = {
		daily: 'day',
		weekly: 'week',
		monthly: 'month',
	}

	constructor(data, container = '.dashboard__content', view = 'daily'){
		this.data = data;
		this.container = document.querySelector(container);
		this.view = view;

		this._createMarkup();
	}

	_createMarkup(){
		const {title, timeframes} = this.data;
		const id = title.toLowerCase().replace(/ /g, '-');
		const {current, previous} = timeframes[this.view.toLowerCase()];
	
		this.container.insertAdjacentHTML('beforeend', `
			<div class="dashboard__item dashboard__item--${id}">
		        <article class="tracking-card">
		          <header class="tracking-card__header">
		            <h4 class="tracking-card__title">${title}</h4>
		            <img class="tracking-card__menu" src="images/icon-ellipsis.svg" alt="elipsis">
		          </header>
		          <div class="tracking-card__body">
		            <div class="tracking-card__time">${current}hrs</div>
		            <div class="tracking-card__prev-period">Last ${DashboardItem.PERIODS[this.view]} - ${previous}</div>
		          </div>
		        </article>
		    </div>


			`);
		this.time = this.container.querySelector(`.dashboard__item--${id} .tracking-card__time`);
		this.prev = this.container.querySelector(`.dashboard__item--${id} .tracking-card__prev-period`);
	}
	changeView(view){
		this.view = view.toLowerCase();
		const {current, previous} = this.data.timeframes[this.view.toLowerCase()];

		this.time.innerText = `${current}hrs`;
		this.prev.innerText = `Last ${DashboardItem.PERIODS[this.view]} - ${previous}hrs`
	}

}
