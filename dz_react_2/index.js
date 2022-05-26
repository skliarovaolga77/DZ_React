const ButtonSvgPrev = (props) => 
	<button className={props.className}>
		<svg width="9" height="16"
				xmlns="http://www.w3.org/2000/svg">
			<path
					d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
			</path>
		</svg>
	</button>;
const ButtonSvgNext = (props) => 
	<button className={props.className}>
		<svg width="9"
				height="16" xmlns="http://www.w3.org/2000/svg">
			<path
					d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
			</path>
		</svg>
	</button>;

const Button = (props) => 
<button className={props.className}>
	<span>Подробнее</span>
</button>;
const LinkA = (props) => 
	<a href={props.href} className={props.className}></a>;
const LinkDiv = (props) => 
<a href={props.href} className={props.className}>
	<div className="header-logo"></div>
</a>;
const slideImg1 = {
	backgroundImage: `url(./images/1.svg)`
};
const slideImg2 = {
	backgroundImage: `url(./images/2.svg)`
};
const slideImg3 = {
	backgroundImage: `url(./images/3.svg)`
};
const slideImg4 = {
	backgroundImage: `url(./images/4.svg)`
}
const styleName = {
	color: '#fff',
	fontSize: '12px',
	lineHeight: '21px',
	marginLeft: '10px',
	opacity: 0.5
}


class RenderJSX extends React.Component{
	constructor(){
		super();
		this.number = '7(962)556-1234',
		this.numberActiv = 'tel:7(962)556-1234',
		this.name = 'Olga Skliarova'
	}
	render() {
		return (
			<div>
				<header>
					<div className="wrapper">
						<div className="header">
						<LinkDiv href="#"/>
							<LinkA href={this.numberActiv} className="header-phone"/>
							<div className="header-phonelink">
								<a href={this.numberActiv} >+{this.number}</a></div>
						</div>
					</div>
				</header>
				<main>
					<div className="wrapper">
						<div className="main">
							<h1 className="main-head">Заголовок c уникальным торговым предложение по системе 4U</h1>
							<div className="main-small">Описания предлжения компании. Сайт рыбатекст поможет дизайнеру, верстальщику,
															вебмастеру сгенерировать несколько абзацев более.
							</div>
							<Button className = "btn main-btn"/>
						</div>
					</div>
				</main>
				<section className="features">
					<div className="wrapper">
						<div className="features-wrapper">
							<h2 className="features-head">Уникальный заголовок для преимущества компании</h2>
							<div className="features-subhead">О нас</div>
							<div className="features-description">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
																		сгенерировать несколько абзацев более менее осмысленного
																		 текста рыбы на русском языке, а начинающему
																		оратору отточить.
							</div>
						<div className="features-slider">	
							<div className="features-slider_items">	
								<div className="features-slider_item">	
								<div className="features-img" style={slideImg1}></div>
									<div className="features-feature">Первое целевое преимущество</div>		
								</div>	
								<div className="features-slider_item">
									<div className="features-img" style={slideImg2}></div>
									<div className="features-feature">Второе целевое преимущество</div>
								</div>

								<div className="features-slider_item">
									<div className="features-img" style={slideImg3}></div>
									<div className="features-feature">Третье целевое преимущество</div>
								</div>
								<div className="features-slider_item">
									<div className="features-img" style={slideImg4}></div>
									<div className="features-feature">Четвертое целевое преимущество</div>
								</div>
							</div>	
							<ButtonSvgPrev className="features-slider-arrow features-slider-prev"/>
							<ButtonSvgNext className="features-slider-arrow features-slider-next"/>
						</div>	
						</div>
					</div>
				</section>
				<section className="contact">
				<div className="wrapper">
						<div className="features-wrapper">
							<h2 className="features-head">Уникальный заголовок для преимущества компании</h2>
							<div className="features-subhead">О нас</div>
							<div className="features-description">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
																		сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему
																		оратору отточить.
							</div>
							<div className="features-slider">
								<div className="features-slider_items">
									
								</div>
								
							</div>
						</div>
					</div>

				</section>
				<footer>
					<div className="footer">
						<div className="footer-logo"></div>
						<div className="footer-company"><span>© 2020 XXXcompany. Все права защищены.</span></div>
						<LinkA href={this.numberActiv} className="footer-phone"/>
						<div className="footer-websurfer"><span className="footer-websurfer_build">Сделано:</span> <a href="#" style={styleName}
								>{this.name}</a></div>
						<div className="footer-phonelink"><a href={this.numberActiv}>+{this.number}</a></div>
					</div>
				</footer>
			</div>
		);
	}
}
ReactDOM.render(<RenderJSX/>, document.querySelector('#root'));




