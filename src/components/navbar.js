import React, { useState, useEffect, useRef } from 'react';

const NavBar = ({ init, setout }) => {
    const [tab, setTab] = useState(init);
    const node0 = useRef(null);
    const node1 = useRef(null);
    const node2 = useRef(null);
    const node3 = useRef(null);
    useEffect(() => {
        switch (tab) {
            case 0:
                setout(0);
                node0.current.focus();
                break;
            case 1:
                setout(1);
                node1.current.focus();
                break;
            case 2:
                setout(2);
                node2.current.focus();
                break;
            case 3:
                setout(3);
                node3.current.focus();
                break;
        }
    }, [tab]);
    return (
        <nav className="navbar navbar-light bg-light navbar-expand-md px-0 flex-shrink-0">
            <ul className="navbar-nav">
                <li
                    className="nav-item"
                    onClick={() => { setTab(0); }}
                ><a href="#" className="nav-link" ref={node0}>浏览</a></li>
                <li
                    className="nav-item"
                    onClick={() => { setTab(1); }}
                ><a href="#" className="nav-link" ref={node1}>统计</a></li>
                <li
                    className="nav-item"
                    onClick={() => { setTab(2); }}
                ><a href="#" className="nav-link" ref={node2}>策略</a></li>
                <li
                    className="nav-item"
                    onClick={() => { setTab(3); }}
                ><a href="#" className="nav-link" ref={node3}>设置</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;