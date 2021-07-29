import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import HomeLink from '../../../components/HomeLink';
import {fetchPlanets, setCurrentPlanet} from '../redux/actions';
import { slowDown, speedUp } from '../../../redux/actions';
import Table from 'antd/lib/table';
import ReactResizeDetector from 'react-resize-detector';
import './PlanetsTable.scss';

const columns = [{
	title: 'Name',
	dataIndex: 'name',
	key: 'name',
	width: 100,
	render(text, record){
		const planetUrl = encodeURIComponent(record.url);
		return <Link
			to={`/planets/${planetUrl}`}
			onClick={() => setCurrentPlanet(record)}
		>{text}</Link>;
	},
}, {
	title: 'Diameter',
	dataIndex: 'diameter',
	key: 'diameter',
	width: 100,
}, {
	title: 'Climate',
	dataIndex: 'climate',
	key: 'climate',
	width: 200,
}, {
	title: 'Population',
	dataIndex: 'population',
	key: 'population',
	width: 200
}];

const addKeyToDataSource = (dataSource) => {
	if (!dataSource || !dataSource.length) {
		return undefined;
	}
	return dataSource.map(record => ({
		...record,
		key: record.url,
	}));
};

const PlanetsTable = props => {
	const [width, setWidth] = useState(null);

	const {
		fetchPlanets,
		fetching,
		planetsCollection,
		currentPage,
	} = props;

	useEffect(() => {
		if (!fetching && !planetsCollection) {
			fetchPlanets();
		}
	});

	const handleTableOnChange = (pag) => {
		if (pag.current !== currentPage) {
			fetchPlanets(pag.current);
		}
	};

	let dataSource, tablePagination;
	if (planetsCollection) {
		const {results, total_records} = planetsCollection;
		dataSource = addKeyToDataSource(results);
		tablePagination = {
			current: currentPage,
			total: total_records,
		};
	}

	return <div className="planets-table">
		<HomeLink />
		<div className="table-name">STAR WARS PLANETS</div>
		<Table
			className="table-body"
			scroll={{x: width < 600 ? 600 : undefined}}
			loading={fetching}
			columns={columns}
			pagination={tablePagination}
			dataSource={dataSource}
			onChange={(pag) => handleTableOnChange(pag)}
		/>
		<ReactResizeDetector handleWidth onResize={(width) => setWidth(width)} />
	</div>;
};

const mapStateToProps = (state) => {
	return {
		fetching: state.planets.fetching,
		fetchSuccess: state.planets.fetchSuccess,
		planetsCollection: state.planets.planetsCollection,
		currentPage: state.planets.currentPage,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchPlanets: (page) => {
			dispatch(speedUp());
			dispatch(fetchPlanets(page)).then(() => dispatch(slowDown())).catch(() => dispatch(slowDown()));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanetsTable);