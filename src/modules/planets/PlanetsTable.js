import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import HomeLink from '../../components/HomeLink';
import {fetchPlanets, setCurrentPlanet} from './redux/actions';
import { slowDown, speedUp } from '../../redux/actions';
import Table from 'antd/lib/table';
import './PlanetsTable.scss';

class PlanetsTable extends React.Component {

	componentDidMount() {
		this.props.fetchPlanets();
	}

	pagination = {
		current: 1
	}

	columns = [{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
		render: (text, record) => {
			const planetUrl = encodeURIComponent(record.url);
			return <Link
				to={`/planets/${planetUrl}`}
				onClick={() => this.props.setCurrentPlanet(record)}
			>{text}</Link>;
		}
	}, {
		title: 'Diameter',
		dataIndex: 'diameter',
		key: 'diameter',
	}, {
		title: 'Climate',
		dataIndex: 'climate',
		key: 'climate',
	}, {
		title: 'Population',
		dataIndex: 'population',
		key: 'population',
	}];

	addKeyToDataSource = (dataSource) => {
		if (!dataSource || !dataSource.length) {
			return undefined;
		}
		return dataSource.map(record => ({
			...record,
			key: record.url,
		}));
	}

	getTablePaginationByCount = (count) => {
		return {
			...this.pagination,
			total: count
		};
	}

	handleTableOnChange = (pagination) => {
		if (pagination.current !== this.pagination.current) {
			this.pagination.current = pagination.current;
			this.props.fetchPlanets(pagination.current);
		}
	}

	render () {
		const {fetching, planetsCollection} = this.props;
		let dataSource, tablePagination;
		if (planetsCollection) {
			const {results, count} = planetsCollection;
			dataSource = this.addKeyToDataSource(results);
			tablePagination = this.getTablePaginationByCount(count);
		}
		return <div className="planets-table">
			<HomeLink />
			<div className="table-name">STAR WARS PLANETS</div>
			<Table
				className="table-body" loading={fetching}
				columns={this.columns} pagination={tablePagination} dataSource={dataSource}
				onChange={(pagination) => this.handleTableOnChange(pagination)}
			/>
		</div>;
	}
}

const mapStateToProps = (state) => {
	return {
		fetching: state.planets.fetching,
		fetchSuccess: state.planets.fetchSuccess,
		planetsCollection: state.planets.planetsCollection
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setCurrentPlanet: (planet) => {
			dispatch(setCurrentPlanet(planet));
		},
		fetchPlanets: (page) => {
			dispatch(speedUp());
			dispatch(fetchPlanets(page)).then(() => dispatch(slowDown())).catch(() => dispatch(slowDown()));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanetsTable);