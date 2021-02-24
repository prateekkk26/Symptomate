import React, {useState} from 'react'
import './searchbar.css'
import { Icon, Input, AutoComplete } from 'antd';
import { Button } from 'react-bootstrap';

const { Option, OptGroup } = AutoComplete;
const SearchBar = (props) => {
    const [dataSource, changeSource] = useState(props.symptoms)
    const handleSearch = (e) => {
        let new_symptoms = props.symptoms.filter((s) => (s.name.toLowerCase().includes(e)));
        changeSource(new_symptoms);
    }


    let options = dataSource.map((item,index) => <Option key={item.id} value={item.name} onClick={()=>{props.selected(item,index)}}>{item.name}</Option>)
    return (
        <div>
            <div className="h2 text-uppercase my-5">Add Symptoms</div>
            <div className="" style={{ width: '100%' }}>
                <AutoComplete
                    className="certain-category-search"
                    dropdownClassName="certain-category-search-dropdown"
                    dropdownMatchSelectWidth={false}
                    dropdownStyle={{ width: 200 }}
                    size="large"
                    style={{ width: '100%' }}
                    dataSource={options}
                    placeholder="Search Symptoms"
                    optionLabelProp="value"
                    onSearch={handleSearch}
                    autoFocus={false}
                    backfill={false}
                >
                    <Input suffix={<Icon type="search" className="certain-category-icon" />} />
                </AutoComplete>
            </div>
        </div>
    )
}

export default SearchBar