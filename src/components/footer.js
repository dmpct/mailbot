const Footer = ({received, running}) => {
    return (
        <div className="row flex-shrink-0 bg-light">
            <div className="col-12 py-1">
                <p>已收取邮件:{received}, 正在执行策略:{running}</p>
            </div>
        </div>
    );
}

export default Footer;