import styles from './cardInfo.module.css';
import { AiOutlineSound } from "react-icons/ai";
import { RxButton } from "react-icons/rx";
import { FiPlay } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";

const title = 'https://thumbs.dfs.ivi.ru/storage5/contents/4/5/fc127f4afc3620ee6b22012e466c37.png/x200/?q=85';
const authors = [
		'https://thumbs.dfs.ivi.ru/storage28/contents/a/0/72d786a60d74ffd14c9a1563b33b4f.jpg/128x128/?q=85',
		'https://thumbs.dfs.ivi.ru/storage8/contents/1/c/a3c9bd71f692936f41b82cedf92344.jpg/128x128/?q=85',
		'https://thumbs.dfs.ivi.ru/storage8/contents/f/1/0dde0f7cb7ba78200a90c4d4b8b7b6.jpg/128x128/?q=85',
		'https://thumbs.dfs.ivi.ru/storage26/contents/8/5/ab6f3f649012bea31e44ef8c383982.jpg/128x128/?q=85'
]

function CardInfo(){
	return(
		<>
		<div className={styles.cardInfo}>
			<div className={styles.video}>
				Тут будет видео :D
			</div>
			<div className={styles.info}>
				<img className={styles.title} src={title} alt="title" />
				<div className={styles.infoBlock}>
					<div className={styles.peas}>
						<p>2016</p>
						<p>1 ч. 40 мин.</p>
						<p>16+</p>
					</div>
					<div className={styles.peas}>
						<p>Россия</p>
						<p>Катастрофы</p>
						<p>Драмы</p>
					</div>
					<div className={styles.peas}>
						<p className={styles.fullhd}>FullHD</p>
						<AiOutlineSound/>
						<p>РУС</p>
						<RxButton/>
						<p>РУС</p>
					</div>
				</div>
				<div className={styles.ratingAndActors}>
					<div className={styles.squers}>
						<div className={styles.squer} style={{background: '#73A32F'}}>8,5</div>
						<p className={styles.actors}>Рейтинг Иви</p>
					</div>
					<div className={styles.squers}>
						<div className={styles.squer} style={{backgroundImage: `url(${authors[0]})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
						<p className={styles.actors}>Константин Лавроненко</p>
					</div>
					<div className={styles.squers}>
						<div className={styles.squer} style={{backgroundImage: `url(${authors[1]})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
						<p className={styles.actors}>Мария Миронова</p>
					</div>
					<div className={styles.squers}>
						<div className={styles.squer} style={{backgroundImage: `url(${authors[2]})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
						<p className={styles.actors}>Виктор Степанян</p>
					</div>
					<div className={styles.squers}>
						<div className={styles.squer} style={{backgroundImage: `url(${authors[3]})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
						<p className={styles.actors}>Татев Овакимян</p>
					</div>
				</div>
				<div className={styles.actions}>
					<button className={`${styles.triler} ${styles.btn}`}><FiPlay/>Трейлер</button>
					<button className={styles.btn}><FaRegBookmark/></button>
					<button className={styles.btn}><RiShareForwardLine/></button>
				</div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi at iste voluptatum ipsa exercitationem fuga porro minima aspernatur doloremque aliquam alias corporis commodi asperiores iusto illo, facere odio quaerat unde quod voluptatibus sunt similique. Harum, adipisci. Nemo deleniti itaque odit ducimus magnam iure veniam repellat exercitationem similique quae deserunt distinctio cupiditate debitis velit tenetur ratione, tempora quasi facere harum esse officiis odio corporis. Totam numquam cupiditate eos asperiores iusto esse explicabo maxime expedita fuga debitis cum ea iure, sunt delectus id libero rerum doloremque. Quibusdam, totam. Minima iste veritatis libero, laborum optio voluptate placeat perspiciatis aperiam repellendus, ea, dolore voluptatibus quia suscipit commodi. Dolorum ullam nam doloribus eum fuga sit molestiae quas mollitia eos necessitatibus esse in quia hic natus aliquam assumenda tempora placeat quo soluta cumque ut tenetur, expedita ipsum sed! Voluptatem recusandae repellat fugit totam, eum provident! Perspiciatis magnam, praesentium ullam autem magni eligendi? Facilis illo amet, corporis, quaerat at modi ut alias excepturi totam ea similique explicabo eos sunt. Tempore sit tempora soluta corrupti voluptas distinctio hic necessitatibus sapiente illo pariatur laboriosam assumenda, nulla id quae laudantium, nostrum sed aliquam at in, labore alias! Aliquam aspernatur iusto dignissimos eligendi maxime alias, iste a labore expedita! Sapiente, repellendus.
				</p>
				<div className={styles.ratingBlock}>
					<div className={styles.ratingCube}>8,5</div>
					<div className={styles.ratingDesc}>
						<p className={styles.ratingTitle}>Рейтинг Иви</p>
						<p>Интересный сюжет</p>
						<p>91 664 оценки</p>
					</div>
					<div className={styles.ratingBtnCont}>
						<button className={styles.ratingBtn}>Оценить</button>
					</div>
				</div>
			</div>
			
		</div>
		</>
	)
}

export default CardInfo;