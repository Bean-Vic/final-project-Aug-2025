import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Cart = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const category = searchParams.get('category') || 'all';
    const page = parseInt(searchParams.get('page') || '1', 10);

    const handleCategoryChange = (e) => {
        setSearchParams({
            category: e.target.value,
            page: 1, // reset to page 1 when filter changes
        });
    };

    return (
        <>
            <h2>This is cart</h2>
            <div>
                <select value={category} onChange={handleCategoryChange}>
                    <option value="all">全部</option>
                    <option value="tech">科技</option>
                    <option value="fashion">时尚</option>
                </select>
                <p>
                    当前分类：{category}，当前页码：{page}
                </p>
            </div>
        </>
    );
};

export default Cart;
