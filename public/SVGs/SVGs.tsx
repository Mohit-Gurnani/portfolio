import {cn} from "@/lib/utils";

export const HeroBackground = ({className}: { className?: string }) => (
	<svg className={className} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" lang="en">
		<defs>
			<pattern id="grid-24" width="24" height="24" patternUnits="userSpaceOnUse">
				<path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1"/>
			</pattern>
		</defs>
		<rect width="100%" height="100%" fill="url(#grid-24)"/>
	</svg>
)

export const ReactLogo = ({className}: { className?: string }) => (
	<svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" lang="en">
		<title>React Logo</title>
		<circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
		<g stroke="#61dafb" strokeWidth="1" fill="none">
			<ellipse rx="11" ry="4.2"/>
			<ellipse rx="11" ry="4.2" transform="rotate(60)"/>
			<ellipse rx="11" ry="4.2" transform="rotate(120)"/>
		</g>
	</svg>
)

export const NextJSLogo = ({className}: { className?: string }) => (
	<svg className={className} xmlns="http://www.w3.org/2000/svg" data-testid="geist-icon" height="16"
	     strokeLinejoin="round"
	     style={{color: "currentColor"}} viewBox="0 0 16 16" width="16">
		<g clipPath="url(#clip0_53_108)">
			<circle cx="8" cy="8" r="7.375" fill="black" stroke="var(--ds-gray-1000)" strokeWidth="1.25"
			        strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M10.63 11V5" stroke="url(#paint0_linear_53_108vsxrmxu21)" strokeWidth="1.25"
			      strokeMiterlimit="1.41421"/>
			<path fillRule="evenodd" clipRule="evenodd"
			      d="M5.995 5.00087V5H4.745V11H5.995V6.96798L12.3615 14.7076C12.712 14.4793 13.0434 14.2242 13.353 13.9453L5.99527 5.00065L5.995 5.00087Z"
			      fill="url(#paint1_linear_53_108vsxrmxu21)"/>
		</g>
		<defs>
			<linearGradient id="paint0_linear_53_108vsxrmxu21" x1="11.13" y1="5" x2="11.13" y2="11"
			                gradientUnits="userSpaceOnUse">
				<stop stopColor="white"/>
				<stop offset="0.609375" stopColor="white" stopOpacity="0.57"/>
				<stop offset="0.796875" stopColor="white" stopOpacity="0"/>
				<stop offset="1" stopColor="white" stopOpacity="0"/>
			</linearGradient>
			<linearGradient id="paint1_linear_53_108vsxrmxu21" x1="9.9375" y1="9.0625" x2="13.5574" y2="13.3992"
			                gradientUnits="userSpaceOnUse">
				<stop stopColor="white"/>
				<stop offset="1" stopColor="white" stopOpacity="0"/>
			</linearGradient>
			<clipPath id="clip0_53_108">
				<rect width="16" height="16" fill="red"/>
			</clipPath>
		</defs>
	</svg>
)

export const TypeScriptLogo = ({className}: { className?: string }) => (
	<svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" height="512" viewBox="0 0 512 512"
	     width="512" lang="en">
		<rect fill="#3178c6" height="512" rx="50" width="512"/>
		<rect fill="#3178c6" height="512" rx="50" width="512"/>
		<path clipRule="evenodd"
		      d="m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z"
		      fill="#fff" fillRule="evenodd"/>
	</svg>
)

export const TurboRepoLogo = ({className}: { className?: string }) => (
	<svg className={className} width="100%" height="100%" viewBox="0 0 203 200" version="1.1"
	     xmlns="http://www.w3.org/2000/svg"
	     xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve"
	     style={{fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: "2"}}>
		<g transform="matrix(3.223595,0,0,3.187088,-22.968114,-22.708005)">
			<path
				d="M38.502,18.096C27.25,18.096 18.096,27.25 18.096,38.502C18.096,49.753 27.25,58.908 38.502,58.908C49.754,58.908 58.908,49.753 58.908,38.502C58.908,27.25 49.754,18.096 38.502,18.096ZM38.502,49.062C32.669,49.062 27.942,44.335 27.942,38.502C27.942,32.669 32.669,27.941 38.502,27.941C44.335,27.941 49.062,32.669 49.062,38.502C49.062,44.335 44.335,49.062 38.502,49.062Z"
				style={{fill: "white", fillRule: "nonzero"}}/>
		</g>
		<g transform="matrix(3.223595,0,0,3.187088,-22.968114,-22.708005)">
			<clipPath id="_clip1">
				<path
					d="M40.212,14.744L40.212,7.125C56.772,8.01 69.927,21.721 69.927,38.502C69.927,55.282 56.772,68.989 40.212,69.878L40.212,62.259C52.554,61.378 62.328,51.064 62.328,38.502C62.328,25.939 52.554,15.626 40.212,14.744ZM20.505,54.081C17.233,50.304 15.124,45.493 14.748,40.212L7.125,40.212C7.52,47.602 10.477,54.309 15.109,59.474L20.501,54.081L20.505,54.081ZM36.792,69.878L36.792,62.259C31.506,61.883 26.695,59.778 22.918,56.502L17.526,61.894C22.694,66.53 29.401,69.483 36.788,69.878L36.792,69.878Z"/>
			</clipPath>
			<g clipPath="url(#_clip1)">
				<g transform="matrix(0.310213,-0,-0,0.313766,7.125,7.125)">
					<use xlinkHref="#_Image2" x="0" y="0" width="203px" height="200px"/>
				</g>
			</g>
		</g>
		<defs>
			<image id="_Image2" width="203px" height="200px"
			       xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCADIAMsDAREAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAQAFAgT/xAAWEAEBAQAAAAAAAAAAAAAAAAAAARH/xAAcAQEBAQADAQEBAAAAAAAAAAADBAACBwgBCQb/xAAZEQEBAQEBAQAAAAAAAAAAAAACAAMBERL/2gAMAwEAAhEDEQA/AMOP7nna5iSlUbzkxVG85hiqLTOTFUbEwpVG86MVRaZzKUqjYkxVG85hiqLTOSlUbEymKo2KLzvtIj5T7caa1NamtTWprU1qa1NamtTWprU1ryOtSr1BpnMKVRsSYqjYkxVG85MVRaZyUqjYkxVHpnRSqLTOYYqjYkxVG85hSqLTOTFUbEymKo2KLzvtIj5T7caa1NamtTWprU1qa1NamtTWprXjldYFXq1iSlUemcylKomJMVRsSYqjYkxVHpnJSqJiYYqj0zopVG85hiqJiTFUbEwpVHpnJiqLTOZTFUbFF532kR8p9uNNamtTWprU1qa1NamtTWprXjdVFXrl51KXnaNiTFUemcwvFRaZyYqjYkxVGxJiqPTOSlUTEmKo9M6KVR6ZzDFUTEmKo2JhSqPTOTcVFpnMpiqRii877Ro+U+3GmtTWprU1qa1NamtTWprXijqQq9jaZyYqiYmFKo2KMVR6ZzC87RaZyYqjYkxVHpnMMVR6ZyUqiYoxVHpnJSqPTOYYqiYkxVI85hSqLTOTFUTEylKpHnRedpEfKcrhTWprU1qa1NamtTWprXhdPFXtN51DFUWmd0YqiYmFKpHnRiqLTOYXnaLTOTFUjEwpVHpnMOVRaZyUqjYoxVHpnJSqLTOYYqiYkxVJpnMKVRaZyYqjYmUpVG86LztIj5TlcKa1NamtTWprU1qa14I6ZKvb7ElKo3nUMVRaZ3RSqNiZTFUbzoxVFpnMLztGxJiqNiYUqj0zk5VFpnJSqNioYqj0zkpVFpnMMVRsSYqj0zmFKotM5MVRsTKUqj0zovO0iPlOVwprU1qa1NamtTWs+Okyr3XpnMKVRsSYqjecwxVFpnJSqNioYqj0zkxVFpnMLztGxJSqNiYYqjecnKotM5hSqNiTFUemdFKotM5MVRsSYqj0zmFKotM5MVRsTKUqj0zovO0iPlOVwprU1qa1NamtZzo0q98aZzDFUWmclKo2JMVR6ZzDFUWmclKo2Khudo9M5MVRaZzKXnaNiSlUbEmKo2JMVRaZzDFUbEwpVHpnRiqLTOTFUbElKo9M5lMVRaZybio2JlKVR6Z0XnaRHynK4U1qa1NamtZrogq/QRiSlUbEmKo9M5KVRMSYqjYmGKo9M5KVRMTDc7R6Z0Yqi0zmUvO0bElKo9M5MVRsSYqi0zkxVHpnJSqPTOjFUWmcwxVGxJSqN5zDFUWmclKo2JlMVRvOi87SI+U5XCmtTWprWa6CKv0R0zopVFpnJiqNiTFUemcwpVExJiqNioYqj0zuilUTEwxVHpnRiqPTOYXnaJiSlUbzmGKo2JMVR6ZyYqi0zopVHoJMVR6ZzpiqJ5yUqjecmKo9M5KVRMVKYqjecl52kR8pyuFNamtZjz4Vfo6xJiqPTOilUWmcmKo2JhSqPTOYYqiYkxVGxUKVR6Z3RiqJiZTFUbzoxVHpnMpedomJKVRvOYYqjYkxVHpnJiqJiSlUemdGKo9M5hiqJiSlUbzmGKo9M5KVRsVKYqiYkvO0jHlOVwprWW87lX6UvOilUjEmKotM5KVRaZyYqjYmFKo9M5hiqJiTFUbEwpVHpnJiqPTOpTFUTzkxVHpnMpedo2JKVRPOYYqkYkxVFpnJiqNiSlUTzoxVHpnJiqNiSlUbzmGKotM5KVRsVKYqjYkvO0bHlOVwsp5z52/TLvPZIVTPOilUjF1DFUWmclKomKMVSMTClUWmcmKo2JMVRsTClUWmcmKo2KlMVRsSUqi0zmU3O0bzkpVGxJiqNiTFUWmcmKo2JhSqNijFUWmcwxVHpnJSqNiYYqi0zkpVHpnMpiqNiifVL3Oy3nW/S6H3nb53nskKp2JKVRsUUqi0zkxVGxJiqNiYUqi0zkxVGxJiqNiYUqi0zoxVG85lNztGxJSqLTOZTc7R6ZyUqjYkxVGxJiqLTOTFUbElKo2KMVRaZzClUbEmKo2JMVRaZyXio9M60v1TdFmPPV+kNNaGvneeyQqnYkxVGxUKVRaZyYqjYkxVGxJSqLTOTFUbElKo2KMVR6ZyYqiYuoYqjYoxVHpnMpedotM5KVRsTDFUemcmKotM5KVRsUYqjecmKotM5hSqNiTFUbzkxVHpnJPaXudmOgL9Faa1NaGvneeyQqnYkxVGxRSqLTOTFUbEmKo2JhSqPTOTFUTElKo3nRiqPTOTFUTF1DFUbzopVHpnMpudotM5KVRsTDFUemcmKotM5KVRsUYqj0zkxVFpnMKVRsSYqjeck+qbudmuhr9CKa1NamtDXzvPZIVTsSYqjYqFKo9M5MVRMSYqjYmUpVHpnJiqJiSlUbzoxVHpnJiqJidMVRvOSlUemcym52i0zkvFRsTDFUemcmKo9M6KVRMTDFUemcmKotM5hSqNidL9U3c7OdF3vymtTWprU1oa+d57JCqdiTFUbzqFKo9M7oxVExRiqPTOYUqj0zkxVExJSqN51DFUemd0YqiYqGKo3nJSqPTOZTc7RMSUqjYmFKo3nJyqPTOoUqjYkxVFpnJSqPTOS/VL3Oz3SN7wprU1qa1NamtTXzvPaIVTsSYqjYqFKo9M5MVRsSYqi0zmFKo9M5MVRMSUqj0zqGKo9M7oxVGxUNxUemclKotM5lNztExJSqRiYUqiYk5VHpnUKVRsXUMVRaZ0T6pu53gdL3uOmtTWprU1qa1Namvnee0QqBiTFUTFFKo9M5MVRsSYqiYkpVHpnJiqNiSlUWmdGKo9M5MVRsTKXnaPTOTFUWmcym52jeclKo9M5hSqJiTlUemclKo2KJ9UvReF07e16a1NamtTWprU1qa1NfO89ohUGmcmKo2KKVRaZyYqjYkpVExJiqPTOTFUbElKo2KMVRaZyYqjYmUpVHpnJiqLTOYXnaN5yYqjYmFKo2JOVRaZ0T2m6LxOor2VTWprU1qa1NamtTWprU187z2icUDElKo2KMVRaZyUqj0zkxVGxMMVR6ZyUqiYkxVGxRiqPTOSlUTEymKo3nJiqLTOZS87RsSYqjecwpVGxRfql7neN1Revqa1NamtTWprU1qa1NamtTXzvPaIVAxRSqNiYYqj0zkpVFpnJiqNiYYqj0zkpVE85MVRsVDFUemd0Uqi0zqUxVG85MVR6ZzKXnaJiTFUbznSfVN0XjdXXrGmtTWprU1qa1NamtTWprU1qa+d57RCoGKKVRsTDFUemclKomJMVRsTDFUemclKomJMVRsVDFUemd0Uqi0zqGKo2JMVR6ZzKXnaJ5yT2m6L/9k="/>
		</defs>
	</svg>
)

export const LaravelLogo = ({className}: { className?: string }) => (
	<svg className={className} xmlns="http://www.w3.org/2000/svg" width="50" height="52" viewBox="0 0 50 52" lang="en">
		<path
			d="M49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1-.402.694l-9.209 5.302V39.25c0 .286-.152.55-.4.694L20.42 51.01c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 0 1-.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054L.402 39.944A.801.801 0 0 1 0 39.25V6.334c0-.072.01-.142.028-.21.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.023-.023.053-.04.079-.06.029-.024.055-.05.088-.069h.001l9.61-5.533a.802.802 0 0 1 .8 0l9.61 5.533h.002c.032.02.059.045.088.068.026.02.055.038.078.06.028.029.048.062.072.094.017.024.04.045.054.071.023.04.036.082.052.124.008.023.022.044.028.068a.809.809 0 0 1 .028.209v20.559l8.008-4.611v-10.51c0-.07.01-.141.028-.208.007-.024.02-.045.028-.068.016-.042.03-.085.052-.124.015-.026.037-.047.054-.071.024-.032.044-.065.072-.093.023-.023.052-.04.078-.06.03-.024.056-.05.088-.069h.001l9.611-5.533a.801.801 0 0 1 .8 0l9.61 5.533c.034.02.06.045.09.068.025.02.054.038.077.06.028.029.048.062.072.094.018.024.04.045.054.071.023.039.036.082.052.124.009.023.022.044.028.068zm-1.574 10.718v-9.124l-3.363 1.936-4.646 2.675v9.124l8.01-4.611zm-9.61 16.505v-9.13l-4.57 2.61-13.05 7.448v9.216l17.62-10.144zM1.602 7.719v31.068L19.22 48.93v-9.214l-9.204-5.209-.003-.002-.004-.002c-.031-.018-.057-.044-.086-.066-.025-.02-.054-.036-.076-.058l-.002-.003c-.026-.025-.044-.056-.066-.084-.02-.027-.044-.05-.06-.078l-.001-.003c-.018-.03-.029-.066-.042-.1-.013-.03-.03-.058-.038-.09v-.001c-.01-.038-.012-.078-.016-.117-.004-.03-.012-.06-.012-.09v-.002-21.481L4.965 9.654 1.602 7.72zm8.81-5.994L2.405 6.334l8.005 4.609 8.006-4.61-8.006-4.608zm4.164 28.764l4.645-2.674V7.719l-3.363 1.936-4.646 2.675v20.096l3.364-1.937zM39.243 7.164l-8.006 4.609 8.006 4.609 8.005-4.61-8.005-4.608zm-.801 10.605l-4.646-2.675-3.363-1.936v9.124l4.645 2.674 3.364 1.937v-9.124zM20.02 38.33l11.743-6.704 5.87-3.35-8-4.606-9.211 5.303-8.395 4.833 7.993 4.524z"
			fill="#FF2D20" fillRule="evenodd"/>
	</svg>
)

export const StrapiLogo = ({className}: { className?: string }) => (
	<svg className={className} xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"
	     fill="none">
		<path
			d="M0 208C0 109.948 0 60.9218 30.4609 30.4609C60.9218 0 109.948 0 208 0H392C490.052 0 539.078 0 569.539 30.4609C600 60.9218 600 109.948 600 208V392C600 490.052 600 539.078 569.539 569.539C539.078 600 490.052 600 392 600H208C109.948 600 60.9218 600 30.4609 569.539C0 539.078 0 490.052 0 392V208Z"
			fill="#4945FF"/>
		<path fillRule="evenodd" clipRule="evenodd" d="M414 182H212V285H315V388H418V186C418 183.791 416.209 182 414 182Z"
		      fill="white"/>
		<rect x="311" y="285" width="4" height="4" fill="white"/>
		<path d="M212 285H311C313.209 285 315 286.791 315 289V388H216C213.791 388 212 386.209 212 384V285Z" fill="#9593FF"/>
		<path d="M315 388H418L318.414 487.586C317.154 488.846 315 487.953 315 486.172V388Z" fill="#9593FF"/>
		<path d="M212 285H113.828C112.046 285 111.154 282.846 112.414 281.586L212 182V285Z" fill="#9593FF"/>
	</svg>
)

export const GitHubIcon = ({className}: { className?: string }) => (
	<svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" lang="en">
		<path
			d="M31.462 12.779l-.045-.115-4.35-11.35a1.137 1.137 0 00-.447-.541 1.163 1.163 0 00-1.343.071c-.187.15-.322.356-.386.587l-2.94 9.001h-11.9l-2.941-9a1.138 1.138 0 00-1.045-.84 1.153 1.153 0 00-1.13.72L.579 12.68l-.045.113a8.09 8.09 0 002.68 9.34l.016.012.038.03 6.635 4.967 3.28 2.484 1.994 1.51a1.35 1.35 0 001.627 0l1.994-1.51 3.282-2.484 6.673-4.997.018-.013a8.088 8.088 0 002.69-9.352z"
			fill="#F4F4F5"/>
		<path
			d="M31.462 12.779l-.045-.115a14.748 14.748 0 00-5.856 2.634l-9.553 7.24A11225.6 11225.6 0 0022.1 27.14l6.673-4.997.019-.013a8.09 8.09 0 002.67-9.352z"
			fill="#F4F4F5"/>
		<path
			d="M9.908 27.14l3.275 2.485 1.994 1.51a1.35 1.35 0 001.627 0l1.994-1.51 3.282-2.484s-2.835-2.14-6.092-4.603l-6.08 4.603z"
			fill="#F4F4F5"/>
		<path
			d="M6.435 15.305A14.712 14.712 0 00.58 12.672l-.045.113a8.09 8.09 0 002.68 9.347l.016.012.038.03 6.635 4.967 6.105-4.603-9.573-7.233z"
			fill="#F4F4F5"/>
	</svg>
)

export const JWTLogo = ({className}: { className?: string }) => (
	<svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
	     id="Jwt-Icon--Streamline-Svg-Logos"
	     height="24" width="24">
		<path fill="#ffffff" d="M13.774325 6.5715 13.750825 0.25h-3.525l0.0235 6.3215 1.7625 2.4205 1.7625 -2.4205Z"
		      strokeWidth="0.25"/>
		<path fill="#ffffff" d="M10.2494 17.405025v6.345h3.525v-6.345l-1.7625 -2.4205 -1.7625 2.4205Z"
		      strokeWidth="0.25"/>
		<path fill="#00f2e6" d="m13.774175 17.405 3.713 5.123 2.8435 -2.068 -3.713 -5.123 -2.8435 -0.9165V17.405Z"
		      strokeWidth="0.25"/>
		<path fill="#00f2e6" d="M10.2493 6.571475 6.5128 1.4484875l-2.8435 2.0679875 3.713 5.123 2.867 0.9165v-2.9845Z"
		      strokeWidth="0.25"/>
		<path fill="#00b9f1"
		      d="m7.382275 8.639475 -6.0159975 -1.9505 -1.081 3.337 6.0159975 1.974 2.8435 -0.94 -1.7625 -2.4205Z"
		      strokeWidth="0.25"/>
		<path fill="#00b9f1" d="m14.855225 12.9165 1.7625 2.4205 6.016 1.9505 1.081 -3.337L17.698725 12l-2.8435 0.9165Z"
		      strokeWidth="0.25"/>
		<path fill="#d63aff" d="m17.698725 11.999975 6.016 -1.974 -1.081 -3.337 -6.016 1.9505 -1.7625 2.4205 2.8435 0.94Z"
		      strokeWidth="0.25"/>
		<path fill="#d63aff" d="M6.301275 12 0.2852775 13.9505l1.081 3.337 6.0159975 -1.9505 1.7625 -2.4205L6.301275 12Z"
		      strokeWidth="0.25"/>
		<path fill="#fb015b" d="M7.3823 15.337 3.6693 20.46l2.8435 2.068 3.7365 -5.123V14.4205l-2.867 0.9165Z"
		      strokeWidth="0.25"/>
		<path fill="#fb015b" d="m16.617675 8.639475 3.713 -5.123 -2.8435 -2.0679875 -3.713 5.1229875v2.9845l2.8435 -0.9165Z"
		      strokeWidth="0.25"/>
	</svg>
)

export const RedisLogo = ({className}: { className?: string }) => (
	<svg className={className} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
	     width="100%" height="100%" viewBox="0 0 233 200" version="1.1" xmlSpace="preserve"
	     style={{fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: "2"}} lang="en">
		<g transform="matrix(1,0,0,1,-0.000155,-0.481056)">
			<g transform="matrix(1.364361,0,0,1.365215,-233.750234,-309.580878)">
				<path
					d="M334.774,339.535C325.696,344.267 278.668,363.603 268.656,368.822C258.644,374.041 253.082,373.992 245.173,370.212C237.264,366.432 187.218,346.216 178.203,341.907C173.697,339.753 171.328,337.937 171.328,336.219L171.328,319.024C171.328,319.024 236.48,304.84 247,301.066C257.52,297.292 261.167,297.166 270.118,300.436C279.069,303.706 332.592,313.372 341.438,316.612L341.434,333.562C341.435,335.262 339.394,337.127 334.774,339.535Z"
					style={{fill: "rgb(164,30,17)", fillRule: "nonzero"}}/>
			</g>
			<g transform="matrix(1.364361,0,0,1.365215,-233.750234,-309.580878)">
				<path
					d="M334.774,322.336C325.696,327.066 278.668,346.404 268.656,351.623C258.644,356.842 253.082,356.793 245.173,353.013C237.264,349.233 187.218,329.015 178.203,324.708C169.188,320.401 168.999,317.433 177.855,313.966L247,287.195C257.518,283.423 261.167,283.295 270.118,286.565C279.069,289.835 325.818,308.451 334.663,311.691C343.508,314.931 343.851,317.604 334.763,322.336L334.774,322.336Z"
					style={{fill: "rgb(216,44,32)", fillRule: "nonzero"}}/>
			</g>
			<g transform="matrix(1.364361,0,0,1.365215,-233.750234,-309.580878)">
				<path
					d="M334.774,311.496C325.696,316.228 278.668,335.564 268.656,340.786C258.644,346.008 253.082,345.954 245.173,342.173C237.264,338.392 187.218,318.177 178.203,313.868C173.697,311.714 171.328,309.898 171.328,308.182L171.328,290.985C171.328,290.985 236.48,276.8 247,273.027C257.52,269.254 261.167,269.127 270.118,272.397C279.069,275.667 332.592,285.331 341.438,288.572L341.434,305.525C341.435,307.225 339.394,309.089 334.774,311.497L334.774,311.496Z"
					style={{fill: "rgb(164,30,17)", fillRule: "nonzero"}}/>
			</g>
			<g transform="matrix(1.364361,0,0,1.365215,-233.750234,-309.580878)">
				<path
					d="M334.774,294.297C325.696,299.029 278.668,318.365 268.656,323.587C258.644,328.809 253.082,328.755 245.173,324.974C237.264,321.193 187.218,300.977 178.203,296.669C169.188,292.361 168.999,289.395 177.855,285.926L247,259.157C257.518,255.384 261.167,255.257 270.118,258.527C279.069,261.797 325.818,280.412 334.663,283.653C343.508,286.894 343.851,289.566 334.763,294.298L334.774,294.297Z"
					style={{fill: "rgb(216,44,32)", fillRule: "nonzero"}}/>
			</g>
			<g transform="matrix(1.364361,0,0,1.365215,-233.750234,-309.580878)">
				<path
					d="M334.774,282.42C325.696,287.152 278.668,306.49 268.656,311.72C258.644,316.95 253.082,316.888 245.173,313.107C237.264,309.326 187.218,289.11 178.203,284.802C173.697,282.648 171.328,280.832 171.328,279.116L171.328,261.919C171.328,261.919 236.48,247.725 247,243.952C257.52,240.179 261.167,240.052 270.118,243.322C279.069,246.592 332.592,256.256 341.438,259.497L341.434,276.449C341.435,278.147 339.394,280.012 334.774,282.419L334.774,282.42Z"
					style={{fill: "rgb(164,30,17)", fillRule: "nonzero"}}/>
			</g>
			<g transform="matrix(1.364361,0,0,1.365215,-233.750234,-309.580878)">
				<path
					d="M334.774,265.22C325.696,269.952 278.668,289.29 268.656,294.51C258.644,299.73 253.082,299.678 245.173,295.898C237.264,292.118 187.218,271.901 178.203,267.593C169.188,263.285 168.999,260.318 177.855,256.85L247,230.08C257.518,226.306 261.167,226.18 270.118,229.45C279.069,232.72 325.818,251.335 334.663,254.576C343.508,257.817 343.851,260.488 334.763,265.219L334.774,265.22Z"
					style={{fill: "rgb(216,44,32)", fillRule: "nonzero"}}/>
			</g>
			<g transform="matrix(1.364361,0,0,1.365215,-233.750234,-309.580878)">
				<path
					d="M263.933,250.186L260.631,258.13L255.296,249.27L238.276,247.74L250.976,243.157L247.176,236.127L259.063,240.779L270.28,237.109L267.244,244.377L278.674,248.655L263.933,250.186ZM232.236,275.77L271.656,269.72L259.753,287.18L232.236,275.77Z"
					style={{fill: "white", fillRule: "nonzero"}}/>
				<ellipse cx="221.612" cy="261.241" rx="21.069" ry="8.167" style={{fill: "white"}}/>
			</g>
			<g transform="matrix(1.364361,0,0,1.365215,-233.750234,-309.580878)">
				<path d="M319.42,260.053L296.106,269.257L296.093,250.827L319.42,260.053Z"
				      style={{fill: "rgb(122,12,0)", fillRule: "nonzero"}}/>
			</g>
			<g transform="matrix(1.364361,0,0,1.365215,-233.750234,-309.580878)">
				<path d="M296.094,250.826L296.107,269.256L293.582,270.252L270.282,261.035L296.094,250.826Z"
				      style={{fill: "rgb(173,33,21)", fillRule: "nonzero"}}/>
			</g>
		</g>
	</svg>
)

export const ViteLogo = ({className}: { className?: string }) => (
	<svg className={className} xmlns="http://www.w3.org/2000/svg" width="410" height="404" viewBox="0 0 410 404"
	     fill="none" lang="en">
		<path
			d="M399.641 59.5246L215.643 388.545C211.844 395.338 202.084 395.378 198.228 388.618L10.5817 59.5563C6.38087 52.1896 12.6802 43.2665 21.0281 44.7586L205.223 77.6824C206.398 77.8924 207.601 77.8904 208.776 77.6763L389.119 44.8058C397.439 43.2894 403.768 52.1434 399.641 59.5246Z"
			fill="url(#paint0_linear)"/>
		<path
			d="M292.965 1.5744L156.801 28.2552C154.563 28.6937 152.906 30.5903 152.771 32.8664L144.395 174.33C144.198 177.662 147.258 180.248 150.51 179.498L188.42 170.749C191.967 169.931 195.172 173.055 194.443 176.622L183.18 231.775C182.422 235.487 185.907 238.661 189.532 237.56L212.947 230.446C216.577 229.344 220.065 232.527 219.297 236.242L201.398 322.875C200.278 328.294 207.486 331.249 210.492 326.603L212.5 323.5L323.454 102.072C325.312 98.3645 322.108 94.137 318.036 94.9228L279.014 102.454C275.347 103.161 272.227 99.746 273.262 96.1583L298.731 7.86689C299.767 4.27314 296.636 0.855181 292.965 1.5744Z"
			fill="url(#paint1_linear)"/>
		<defs>
			<linearGradient id="paint0_linear" x1="6.00017" y1="32.9999" x2="235" y2="344" gradientUnits="userSpaceOnUse">
				<stop stopColor="#41D1FF"/>
				<stop offset="1" stopColor="#BD34FE"/>
			</linearGradient>
			<linearGradient id="paint1_linear" x1="194.651" y1="8.81818" x2="236.076" y2="292.989"
			                gradientUnits="userSpaceOnUse">
				<stop stopColor="#FFEA83"/>
				<stop offset="0.0833333" stopColor="#FFDD35"/>
				<stop offset="1" stopColor="#FFA800"/>
			</linearGradient>
		</defs>
	</svg>
)

export const ChartJsLogo = ({className}: { className?: string }) => (
	<svg className={className} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
	     id="Layer_1" x="0px"
	     y="0px" width="192px" height="192px" viewBox="0 0 192 192" enableBackground="new 0 0 192 192"
	     xmlSpace="preserve" lang="en">
		<path fill="#36A2EB"
		      d="M161.271,96.556c-22.368,0.439-17.709,14.599-33.473,18.18c-16.014,3.638-18.542-39.111-34.552-39.111  c-16.012,0-19.559,41.526-39.608,70.034l-0.572,0.807l42.985,24.813l65.22-37.651V96.556z"/>
		<path fill="#FFCE56"
		      d="M161.271,95.267c-7.488-9.61-12.567-20.658-23.494-20.658c-19.337,0-14.249,31.545-35.62,31.545  c-21.373,0-23.62-33.931-47.832-2.035c-7.715,10.163-13.925,21.495-18.803,32.218l60.529,34.943l65.22-37.651V95.267z"/>
		<path opacity="0.8" fill="#FE6184"
		      d="M30.829,108.334c7.338-20.321,10.505-36.779,24.514-36.779  c21.371,0,26.458,60.039,44.779,53.931c18.318-6.105,16.282-38.669,44.779-38.669c5.424,0,10.962,3.323,16.371,8.698v38.113  l-65.22,37.651l-65.222-37.651V108.334z"/>
		<path fill="#E7E9ED"
		      d="M96,176l-69.292-39.999V56L96,16l69.292,40v80L96,176z M34.849,131.301L96,166.602l61.151-35.301V60.7  L96,25.399L34.849,60.7V131.301z"/>
	</svg>
)

export const StripeLogo = ({className}: { className?: string }) => (
	<svg className={className} xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 1024 1024"
	     lang="en">
		<circle cx="512" cy="512" r="512" style={{fill: "#635bff"}}/>
		<path
			d="M781.67 515.75c0-38.35-18.58-68.62-54.08-68.62s-57.23 30.26-57.23 68.32c0 45.09 25.47 67.87 62 67.87 17.83 0 31.31-4 41.5-9.74v-30c-10.19 5.09-21.87 8.24-36.7 8.24-14.53 0-27.42-5.09-29.06-22.77h73.26c.01-1.92.31-9.71.31-13.3zm-74-14.23c0-16.93 10.34-24 19.78-24 9.14 0 18.88 7 18.88 24zm-95.14-54.39a42.32 42.32 0 0 0-29.36 11.69l-1.95-9.29h-33v174.68l37.45-7.94.15-42.4c5.39 3.9 13.33 9.44 26.52 9.44 26.82 0 51.24-21.57 51.24-69.06-.12-43.45-24.84-67.12-51.05-67.12zm-9 103.22c-8.84 0-14.08-3.15-17.68-7l-.15-55.58c3.9-4.34 9.29-7.34 17.83-7.34 13.63 0 23.07 15.28 23.07 34.91.01 20.03-9.28 35.01-23.06 35.01zM496.72 438.29l37.6-8.09v-30.41l-37.6 7.94v30.56zm0 11.39h37.6v131.09h-37.6zm-40.3 11.08L454 449.68h-32.34v131.08h37.45v-88.84c8.84-11.54 23.82-9.44 28.46-7.79v-34.45c-4.78-1.8-22.31-5.1-31.15 11.08zm-74.91-43.59L345 425l-.15 120c0 22.17 16.63 38.5 38.8 38.5 12.28 0 21.27-2.25 26.22-4.94v-30.45c-4.79 1.95-28.46 8.84-28.46-13.33v-53.19h28.46v-31.91h-28.51zm-101.27 70.56c0-5.84 4.79-8.09 12.73-8.09a83.56 83.56 0 0 1 37.15 9.59V454a98.8 98.8 0 0 0-37.12-6.87c-30.41 0-50.64 15.88-50.64 42.4 0 41.35 56.93 34.76 56.93 52.58 0 6.89-6 9.14-14.38 9.14-12.43 0-28.32-5.09-40.9-12v35.66a103.85 103.85 0 0 0 40.9 8.54c31.16 0 52.58-15.43 52.58-42.25-.17-44.63-57.25-36.69-57.25-53.47z"
			style={{fill: "#fff"}}/>
	</svg>
)

export const ZodLogo = ({className}: { className?: string }) => (
	<svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 96 96"
	     id="Zod--Streamline-Svg-Logos" height="24"
	     width="24">
		<g clipPath="url(#a)">
			<path fill="#18253f"
			      d="M22.9392 15.373h50.8337l14.8959 15.5514L46.522 78.1307 7.3252 30.9244l15.614-15.5514Z"></path>
			<path fill="#274d82"
			      d="M56.7388 66.9804H36.8147L27.8159 55.964l25.5007-.0009.0009-1.5627h14.5766l-11.1553 12.58Z"></path>
			<path fill="#274d82"
			      d="M84.3915 26.4902 29.4157 58.2305l-7.1716-8.9717 42.5607-24.5732-.7817-1.3545 11.3362-6.545 9.0322 9.7041Z"></path>
			<path fill="#274d82" d="m54.9364 15.3885-41.2801 23.833-6.41997-8.0144L34.8748 15.25l20.0616.1385Z"></path>
			<g filter="url(#b)">
				<path fill="#000000"
				      d="M75.7601 10.7021H21.0052L1 30.6044l45.4185 54.693 3.6233-4.0655L95 30.7912 75.7601 10.7021Zm-2.0003 4.6859 14.8609 15.5175-42.0764 47.2082L7.34119 30.9055 22.9388 15.388h50.821Z"></path>
			</g>
			<path fill="#3068b7"
			      d="M75.7601 10.7021H21.0052L1 30.6044l45.4185 54.693 3.6233-4.0655L95 30.7912 75.7601 10.7021Zm-2.0003 4.6859 14.8609 15.5175-42.0764 47.2082L7.34119 30.9055 22.9388 15.388h50.821Z"></path>
		</g>
		<defs>
			<clipPath id="a">
				<path fill="#ffffff" d="M0 0h96v96H0z"></path>
			</clipPath>
			<filter id="b" width="102" height="82.596" x="-2" y="7.702" colorInterpolationFilters="sRGB"
			        filterUnits="userSpaceOnUse">
				<feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
				<feColorMatrix in="SourceAlpha" result="hardAlpha"
				               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
				<feOffset dx="1" dy="1"></feOffset>
				<feGaussianBlur stdDeviation="2"></feGaussianBlur>
				<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.36 0"></feColorMatrix>
				<feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1011_25474"></feBlend>
				<feBlend in="SourceGraphic" in2="effect1_dropShadow_1011_25474" result="shape"></feBlend>
			</filter>
		</defs>
	</svg>
)

export const AxiosLogo = ({className}: { className?: string }) => (
	<svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
		<path
			fill="#5a29e4"
			d="m 34,43.977569 27.379067,-22.912155 0.0385,91.494586 -9.3189,7.74007 -0.15403,-76.091455 z"/>
		<path
			fill="#5a29e4"
			d="M 96.961687,82.322502 69.582627,105.23466 69.544127,13.74007 78.863017,6 l 0.15403,76.091452 z"/>
	</svg>
)

export const TailwindLogo = ({className}: { className?: string }) => (
	<svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33" lang="en">
		<g clipPath="url(#prefix__clip0)">
			<path fill="#38bdf8" fillRule="evenodd"
			      d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
			      clipRule="evenodd"/>
		</g>
		<defs>
			<clipPath id="prefix__clip0">
				<path fill="#fff" d="M0 0h54v32.4H0z"/>
			</clipPath>
		</defs>
	</svg>
)

export const TMDBLogo = ({className}: { className?: string }) => (
	<svg className={className} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
	     viewBox="0 0 185.04 133.4"
	     lang="en">
		<defs>
			<style>{`
				.cls-1 { fill: url(#linear-gradient); }
			`}</style>
			<linearGradient id="linear-gradient" y1="66.7" x2="185.04" y2="66.7" gradientUnits="userSpaceOnUse">
				<stop offset="0" stopColor="#90cea1"/>
				<stop offset="0.56" stopColor="#3cbec9"/>
				<stop offset="1" stopColor="#00b3e5"/>
			</linearGradient>
		</defs>
		<title>Asset 4</title>
		<g id="Layer_2" data-name="Layer 2">
			<g id="Layer_1-2" data-name="Layer 1">
				<path className="cls-1"
				      d="M51.06,66.7h0A17.67,17.67,0,0,1,68.73,49h-.1A17.67,17.67,0,0,1,86.3,66.7h0A17.67,17.67,0,0,1,68.63,84.37h.1A17.67,17.67,0,0,1,51.06,66.7Zm82.67-31.33h32.9A17.67,17.67,0,0,0,184.3,17.7h0A17.67,17.67,0,0,0,166.63,0h-32.9A17.67,17.67,0,0,0,116.06,17.7h0A17.67,17.67,0,0,0,133.73,35.37Zm-113,98h63.9A17.67,17.67,0,0,0,102.3,115.7h0A17.67,17.67,0,0,0,84.63,98H20.73A17.67,17.67,0,0,0,3.06,115.7h0A17.67,17.67,0,0,0,20.73,133.37Zm83.92-49h6.25L125.5,49h-8.35l-8.9,23.2h-.1L99.4,49H90.5Zm32.45,0h7.8V49h-7.8Zm22.2,0h24.95V77.2H167.1V70h15.35V62.8H167.1V56.2h16.25V49h-24ZM10.1,35.4h7.8V6.9H28V0H0V6.9H10.1ZM39,35.4h7.8V20.1H61.9V35.4h7.8V0H61.9V13.2H46.75V0H39Zm41.25,0h25V28.2H88V21h15.35V13.8H88V7.2h16.25V0h-24Zm-79,49H9V57.25h.1l9,27.15H24l9.3-27.15h.1V84.4h7.8V49H29.45l-8.2,23.1h-.1L13,49H1.2Zm112.09,49H126a24.59,24.59,0,0,0,7.56-1.15,19.52,19.52,0,0,0,6.35-3.37,16.37,16.37,0,0,0,4.37-5.5A16.91,16.91,0,0,0,146,115.8a18.5,18.5,0,0,0-1.68-8.25,15.1,15.1,0,0,0-4.52-5.53A18.55,18.55,0,0,0,133.07,99,33.54,33.54,0,0,0,125,98H113.29Zm7.81-28.2h4.6a17.43,17.43,0,0,1,4.67.62,11.68,11.68,0,0,1,3.88,1.88,9,9,0,0,1,2.62,3.18,9.87,9.87,0,0,1,1,4.52,11.92,11.92,0,0,1-1,5.08,8.69,8.69,0,0,1-2.67,3.34,10.87,10.87,0,0,1-4,1.83,21.57,21.57,0,0,1-5,.55H121.1Zm36.14,28.2h14.5a23.11,23.11,0,0,0,4.73-.5,13.38,13.38,0,0,0,4.27-1.65,9.42,9.42,0,0,0,3.1-3,8.52,8.52,0,0,0,1.2-4.68,9.16,9.16,0,0,0-.55-3.2,7.79,7.79,0,0,0-1.57-2.62,8.38,8.38,0,0,0-2.45-1.85,10,10,0,0,0-3.18-1v-.1a9.28,9.28,0,0,0,4.43-2.82,7.42,7.42,0,0,0,1.67-5,8.34,8.34,0,0,0-1.15-4.65,7.88,7.88,0,0,0-3-2.73,12.9,12.9,0,0,0-4.17-1.3,34.42,34.42,0,0,0-4.63-.32h-13.2Zm7.8-28.8h5.3a10.79,10.79,0,0,1,1.85.17,5.77,5.77,0,0,1,1.7.58,3.33,3.33,0,0,1,1.23,1.13,3.22,3.22,0,0,1,.47,1.82,3.63,3.63,0,0,1-.42,1.8,3.34,3.34,0,0,1-1.13,1.2,4.78,4.78,0,0,1-1.57.65,8.16,8.16,0,0,1-1.78.2H165Zm0,14.15h5.9a15.12,15.12,0,0,1,2.05.15,7.83,7.83,0,0,1,2,.55,4,4,0,0,1,1.58,1.17,3.13,3.13,0,0,1,.62,2,3.71,3.71,0,0,1-.47,1.95,4,4,0,0,1-1.23,1.3,4.78,4.78,0,0,1-1.67.7,8.91,8.91,0,0,1-1.83.2h-7Z"/>
			</g>
		</g>
	</svg>
)

export const KotlinLogo = ({className}: { className?: string }) => (
	<svg className={className} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
	     id="Layer_1" x="0px"
	     y="0px" viewBox="0 0 60 60" enableBackground={"new 0 0 60 60"} xmlSpace="preserve" lang="en">
		<g>

			<linearGradient id="XMLID_3_" gradientUnits="userSpaceOnUse" x1="15.9594" y1="-13.0143" x2="44.3068" y2="15.3332"
			                gradientTransform="matrix(1 0 0 -1 0 61)">
				<stop offset="9.677000e-02" style={{stopColor: "#0095D5"}}/>
				<stop offset="0.3007" style={{stopColor: "#238AD9"}}/>
				<stop offset="0.6211" style={{stopColor: "#557BDE"}}/>
				<stop offset="0.8643" style={{stopColor: "#7472E2"}}/>
				<stop offset="1" style={{stopColor: "#806EE3"}}/>
			</linearGradient>
			<polygon id="XMLID_2_" style={{fill: "url(#XMLID_3_)"}} points="0,60 30.1,29.9 60,60  "/>

			<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="4.2092" y1="48.9409" x2="20.6734" y2="65.405"
			                gradientTransform="matrix(1 0 0 -1 0 61)">
				<stop offset="0.1183" style={{stopColor: "#0095D5"}}/>
				<stop offset="0.4178" style={{stopColor: "#3C83DC"}}/>
				<stop offset="0.6962" style={{stopColor: "#6D74E1"}}/>
				<stop offset="0.8333" style={{stopColor: "#806EE3"}}/>
			</linearGradient>
			<polygon style={{fill: "url(#SVGID_1_)"}} points="0,0 30.1,0 0,32.5  "/>

			<linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="-10.1017" y1="5.8362" x2="45.7315" y2="61.6694"
			                gradientTransform="matrix(1 0 0 -1 0 61)">
				<stop offset="0.1075" style={{stopColor: "#C757BC"}}/>
				<stop offset="0.2138" style={{stopColor: "#D0609A"}}/>
				<stop offset="0.4254" style={{stopColor: "#E1725C"}}/>
				<stop offset="0.6048" style={{stopColor: "#EE7E2F"}}/>
				<stop offset="0.743" style={{stopColor: "#F58613"}}/>
				<stop offset="0.8232" style={{stopColor: "#F88909"}}/>
			</linearGradient>
			<polygon style={{fill: "url(#SVGID_2_)"}} points="30.1,0 0,31.7 0,60 30.1,29.9 60,0  "/>
		</g>
	</svg>
)

export const OpenWeatherApiLogo = ({className}: { className?: string }) => (
	<svg className={cn("size-20!", className)} xmlns="http://www.w3.org/2000/svg" width="176" height="79"
	     viewBox="0 0 176 79"
	     fill="none">
		<g clipPath="url(#clip0_307_37)">
			<path
				d="M64.7337 31.0703C64.0627 31.0428 63.3862 31.0703 62.7097 31.0703C59.9597 31.0703 59.9597 31.0703 60.0202 28.2763C60.1377 25.0451 59.5558 21.8266 58.3141 18.8412C57.0725 15.8557 55.2005 13.1737 52.8262 10.9788V10.9513L52.3312 10.5113C49.8582 8.3421 46.9397 6.74138 43.7812 5.82188C40.6227 4.90238 37.301 4.68645 34.0501 5.1893C30.7992 5.69215 27.698 6.90154 24.9649 8.73234C22.2318 10.5631 19.9333 12.9708 18.2312 15.7858L18.1927 15.8463C18.0772 16.0443 17.9562 16.2423 17.8462 16.4403C15.6558 20.314 14.6697 24.7526 15.0137 29.1893C15.0577 29.9263 15.5637 31.0153 14.0677 31.1198C12.7752 31.2078 11.8072 31.8513 12.0327 33.3198C12.2582 34.7883 13.3857 34.9698 14.6452 34.9698C16.5977 34.9313 18.5557 34.9698 20.5082 34.9698C21.7622 34.9698 22.6642 35.4758 22.7082 36.8013C22.7467 38.0003 21.9822 38.6658 20.7997 38.6823C19.3312 38.6823 18.3742 39.3588 18.4897 40.8383C18.6052 42.3178 19.8152 42.4883 21.0637 42.4553C24.5672 42.4278 28.0707 42.4223 31.5797 42.4553C32.8722 42.4553 33.8292 43.0053 33.7522 44.5068C33.6807 45.8763 32.7952 46.3108 31.5522 46.3053C29.3962 46.3053 27.2402 46.3053 25.0787 46.3053C23.7092 46.3053 22.3672 46.3768 22.3617 48.1753C22.3562 49.9738 23.7147 50.0343 25.0787 50.0288C32.3607 50.0288 39.6427 50.0288 46.9192 50.0288C50.0872 50.0288 53.2552 50.0288 56.4232 50.0288C57.7102 50.0288 58.7772 49.7923 58.8157 48.2578C58.8597 46.6078 57.7157 46.2778 56.3737 46.3108C55.8237 46.3108 55.2737 46.3108 54.7567 46.3108H45.0492C43.7787 46.3108 42.9372 45.7608 42.8987 44.4408C42.8602 43.1208 43.7347 42.5488 44.9667 42.4608C45.3682 42.4278 45.7752 42.4608 46.1767 42.4608C47.4087 42.4608 48.5582 42.3233 48.6572 40.7668C48.7672 39.1168 47.6672 38.7263 46.3032 38.7208C45.0602 38.6548 44.3397 37.9288 44.3397 36.8288C44.3397 35.5803 45.1592 34.9038 46.4737 34.9423C47.2822 34.9423 48.0962 34.9423 48.9047 34.9423C54.1627 34.9423 59.4207 34.9423 64.6787 34.9423C66.0042 34.9423 66.9557 34.5243 66.9997 33.0448C67.0437 31.5653 65.9987 31.1253 64.7337 31.0703Z"
				fill="#EB6D4A"/>
			<circle cx="63.9501" cy="40.562" r="1.85432" fill="#EB6D4A"/>
			<circle cx="68.6259" cy="40.562" r="1.85432" fill="#EB6D4A"/>
			<rect x="63.7603" y="38.7077" width="4.98122" height="3.70865" fill="#EB6D4A"/>
			<circle cx="53.0244" cy="40.562" r="1.85432" fill="#EB6D4A"/>
			<circle cx="57.7002" cy="40.562" r="1.85432" fill="#EB6D4A"/>
			<rect x="52.8346" y="38.7077" width="4.98122" height="3.70865" fill="#EB6D4A"/>
		</g>
		<defs>
			<clipPath id="clip0_307_37">
				<rect width="58.5037" height="55" fill="white" transform="translate(12 0.924805)"/>
			</clipPath>
		</defs>
	</svg>
)

export const AndroidSdkLogo = ({className}: { className?: string }) => (
	<svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60" height="60" fill="none"
	     lang="en">
		<g clipPath="url(#a)">
			<path fill="#000"
			      d="M22.927 59.746c-.99-.234-1.817-.783-2.976-1.971-1.935-1.986-3.506-2.812-6.236-3.282-2.831-.488-4.09-1.54-4.846-4.054-.934-3.104-1.91-4.59-4.055-6.174-2.433-1.797-3.057-3.381-2.463-6.253.55-2.66.34-4.55-.778-6.982-1.332-2.9-1.168-4.45.725-6.827 1.735-2.18 2.28-3.62 2.54-6.716.262-3.125 1.132-4.407 3.692-5.445 2.138-.866 3.966-2.37 4.98-4.094 1.172-1.995 1.343-2.223 2.069-2.765 1.172-.874 2.12-1.117 3.924-1.004 3.135.197 4.815-.18 6.92-1.55 2.745-1.787 4.409-1.787 7.154 0 2.105 1.37 3.785 1.747 6.92 1.55 2.964-.185 4.197.593 6.004 3.789.896 1.584 2.726 3.125 4.73 3.982 2.852 1.221 3.682 2.336 3.892 5.232.228 3.136.871 4.89 2.575 7.02 1.897 2.373 2.062 3.925.728 6.828-1.117 2.431-1.327 4.322-.777 6.982.593 2.872-.03 4.456-2.464 6.253-2.144 1.584-3.12 3.07-4.054 6.174-.757 2.514-2.015 3.566-4.847 4.054-2.735.47-4.308 1.3-6.235 3.288-2.137 2.204-3.67 2.567-6.657 1.58-2.443-.808-4.325-.811-6.759-.013-1.704.56-2.613.657-3.706.398Z"
			      opacity=".2"/>
			<path fill="#fff"
			      d="M22.927 59.16c-.99-.234-1.817-.783-2.976-1.971-1.935-1.986-3.506-2.812-6.236-3.282-2.831-.488-4.09-1.54-4.846-4.054-.934-3.104-1.91-4.59-4.055-6.174-2.433-1.797-3.057-3.381-2.463-6.253.55-2.66.34-4.55-.778-6.982-1.332-2.9-1.168-4.45.725-6.827 1.735-2.18 2.28-3.62 2.54-6.716.262-3.125 1.132-4.407 3.692-5.445 2.138-.866 3.966-2.37 4.98-4.094 1.172-1.995 1.343-2.223 2.069-2.765 1.172-.874 2.12-1.117 3.924-1.004 3.135.197 4.815-.18 6.92-1.55 2.745-1.787 4.409-1.787 7.154 0 2.105 1.37 3.785 1.747 6.92 1.55 2.964-.185 4.197.593 6.004 3.789.896 1.584 2.726 3.125 4.73 3.982 2.852 1.221 3.682 2.336 3.892 5.232.228 3.136.871 4.89 2.575 7.02 1.897 2.373 2.062 3.925.728 6.828-1.117 2.432-1.327 4.323-.777 6.982.593 2.872-.03 4.456-2.464 6.253-2.144 1.584-3.12 3.07-4.054 6.174-.757 2.514-2.015 3.566-4.847 4.054-2.735.47-4.308 1.3-6.235 3.288-2.137 2.204-3.67 2.567-6.657 1.58-2.443-.808-4.325-.811-6.759-.013-1.704.56-2.613.657-3.706.398Z"/>
			<path fill="#034ECA"
			      d="M43.424 47.509a.731.731 0 0 1-1.34.569l-1.761-3.27a1.076 1.076 0 1 1 1.972-.837l1.129 3.538Z"/>
			<path fill="url(#b)"
			      d="M43.424 47.509a.731.731 0 0 1-1.34.569l-1.761-3.27a1.076 1.076 0 1 1 1.972-.837l1.129 3.538Z"/>
			<mask id="c" width="11" height="14" x="37" y="23" maskUnits="userSpaceOnUse" style={{maskType: "alpha"}}>
				<path fill="#fff"
				      d="M42.048 35.775a6.204 6.204 0 0 0 1.69-1.636 6.252 6.252 0 0 0 .992-2.246l.013.002.74.14a1829.466 1829.466 0 0 0 1.24.233.58.58 0 0 0 .49-.14.567.567 0 0 0 .087-.745.57.57 0 0 0-.365-.239 359.59 359.59 0 0 0-.519-.097l-.721-.136-.74-.14-.08-.014.002-.062a6.232 6.232 0 0 0-.357-2.235l-.022-.06a6.241 6.241 0 0 0-1.137-1.941c.017-.02.033-.04.05-.058l.488-.572.476-.558.342-.401a.578.578 0 0 0 .135-.416.596.596 0 0 0-.049-.19.569.569 0 0 0-.567-.334.573.573 0 0 0-.39.198l-.342.401-.476.559-.488.571-.005.005a6.298 6.298 0 0 0-3.723-1.377 6.246 6.246 0 0 0-1.628.163l4.144 11.729c.247-.12.489-.254.72-.404Z"/>
			</mask>
			<g mask="url(#c)">
				<path fill="#4FAF53" d="m48.373 33.769-4.42-12.526-7.047 2.487 4.42 12.525 7.047-2.486Z"/>
				<g filter="url(#d)" opacity=".8">
					<path fill="url(#e)" fillOpacity=".3"
					      d="M44.17 29.065c-.438 1.55-1.767-1.91-4.157-2.584-2.39-.675-5.331 1.58-4.894.03.78-1.138 2.872-2.007 5.262-1.332 2.39.674 3.81 2.694 3.789 3.886Z"/>
				</g>
				<g filter="url(#f)" opacity=".7">
					<path fill="url(#g)" fillOpacity=".4"
					      d="M43.869 28.213c-1.314-.933-.177 2.595-1.614 4.62-1.438 2.025-5.143 2.116-3.83 3.049 1.322.395 3.496-.24 4.933-2.265 1.437-2.025 1.275-4.49.51-5.404Z"/>
				</g>
				<g filter="url(#h)" opacity=".6">
					<path fill="#8BD8A0"
					      d="M38.761 23.716c-1.668.052-3.016.252-3.01.445.006.194 1.364.308 3.032.255 1.668-.052 3.998 1.338 3.992 1.144-.006-.193-2.346-1.897-4.014-1.844Z"/>
				</g>
				<g filter="url(#i)" opacity=".5">
					<path fill="#8BD8A0"
					      d="M42.99 35.697c-1.333 1.006-2.507 1.696-2.624 1.542-.116-.155.869-1.095 2.2-2.102 1.332-1.006 2.274-3.55 2.39-3.396.117.155-.635 2.95-1.967 3.956Z"/>
				</g>
				<g filter="url(#j)" opacity=".7">
					<path fill="#0D652D"
					      d="M43.605 24.693c-.61.746-.906 1.083-.972 1.03-.066-.055.124-.48.733-1.225.375-.935 1.49-.48 1.556-.426.066.054-.537-.443-1.317.621Z"/>
				</g>
				<g filter="url(#k)" opacity=".1">
					<path fill="#000"
					      d="M42.517 25.66c.057.043.508-.451 1.007-1.105.5-.653.858-1.218.801-1.261-.057-.044-.508.45-1.007 1.104-.5.654-.858 1.218-.801 1.262Z"/>
				</g>
				<g filter="url(#l)" opacity=".3">
					<path fill="#fff"
					      d="M44.207 25.143c-.637.78-.924 1.152-.871 1.195.053.043.425-.259 1.062-1.04.916-.858-.034-1.489-.122-1.362-.26.277.845.174-.069 1.207Z"/>
				</g>
				<path fill="url(#m)" fillOpacity=".9"
				      d="M43.915 23.421c-.276.198-.312.622-.08.947.234.326.646.43.923.231.276-.198.312-.622.08-.947-.234-.325-.646-.428-.923-.23Z"
				      opacity=".15"/>
				<path fill="url(#n)" fillOpacity=".9"
				      d="M46.648 30.881c-.276.198-.312.622-.079.947.233.326.645.43.922.231.276-.197.312-.621.08-.947-.233-.325-.646-.428-.923-.23Z"
				      opacity=".15"/>
				<g filter="url(#o)" opacity=".1">
					<path fill="#000"
					      d="M44.664 31.875c.016-.07.68.022 1.481.204.802.182 1.44.387 1.423.456-.016.07-.678-.021-1.48-.203-.802-.183-1.44-.387-1.424-.457Z"/>
				</g>
				<mask id="p" width="2" height="3" x="44" y="30" maskUnits="userSpaceOnUse" style={{maskType: "alpha"}}>
					<path fill="#000"
					      d="M44.685 31.969c.075-.34.149-1.079.176-1.406l.727-.047-.09 2.084c-.302-.069-.888-.292-.813-.631Z"/>
				</mask>
				<g mask="url(#p)">
					<g filter="url(#q)" opacity=".3" style={{mixBlendMode: "multiply"}}>
						<path fill="#0D652D"
						      d="M44.85 32.118c.036-.57.006-1.037-.065-1.042-.072-.004-.113.435-.148 1.006-.035.571-.05 1.059.022 1.063.071.004.157-.455.192-1.027Z"/>
					</g>
					<g filter="url(#r)" opacity=".3" style={{mixBlendMode: "screen"}}>
						<path fill="#81C995"
						      d="M44.888 30.961c.02-.162.01-.297-.022-.3-.032-.005-.054.12-.073.282-.019.163-.029.302.003.306.032.003.073-.125.092-.288Z"/>
					</g>
				</g>
				<mask id="s" width="2" height="3" x="42" y="24" maskUnits="userSpaceOnUse" style={{maskType: "alpha"}}>
					<path fill="#000"
					      d="M42.368 25.576c.275.21.808.73 1.04.962l.585-.431-1.41-1.537c-.186.247-.491.794-.215 1.006Z"/>
				</mask>
				<g mask="url(#s)">
					<g filter="url(#t)" opacity=".3" style={{mixBlendMode: "multiply"}}>
						<path fill="#0D652D"
						      d="M42.398 25.355c.395.415.672.79.62.84-.051.05-.366-.26-.76-.675-.394-.415-.72-.778-.667-.827.052-.05.413.247.807.662Z"/>
					</g>
					<g filter="url(#u)" opacity=".3" style={{mixBlendMode: "screen"}}>
						<path fill="#81C995"
						      d="M43.172 26.216c.119.112.198.222.176.245-.022.023-.118-.058-.237-.17-.12-.112-.217-.212-.195-.236.022-.023.137.05.256.161Z"/>
					</g>
				</g>
				<g filter="url(#v)" opacity=".7">
					<path fill="#0D652D"
					      d="M46.147 32.003c-.947-.176-1.391-.242-1.407-.159-.015.084.404.286 1.35.462.89.472 1.448-.595 1.464-.68.016-.083-.125.687-1.407.377Z"/>
				</g>
				<g filter="url(#w)" opacity=".3">
					<path fill="#fff"
					      d="M46.311 31.245c-.963-.18-1.41-.277-1.396-.348.013-.07.48-.086 1.444.093 1.576.036 1.76 1.145.94 1.242-.36-.025.341-.798-.988-.987Z"/>
				</g>
			</g>
			<path fill="url(#x)" fillOpacity=".7"
			      d="M40.676 26.848c-.078.192-.057.384.05.427.105.043.255-.078.334-.27.078-.193.056-.384-.05-.428-.105-.043-.255.078-.334.27Z"/>
			<path fill="url(#y)" fillOpacity=".7"
			      d="M42.527 32.114c-.182-.1-.285-.263-.23-.363.055-.1.248-.1.43 0s.285.263.23.363c-.055.1-.248.1-.43 0Z"/>
			<g filter="url(#z)" opacity=".09" style={{mixBlendMode: "multiply"}}>
				<path fill="#011B04"
				      d="M40.168 27.407c.5.022.707-.26.747-.404.293-.476-.182-.81-.404-.881-.222-.072-.598-.157-.955.181-.356.338-.013 1.076.612 1.104Z"/>
			</g>
			<g filter="url(#A)" opacity=".09" style={{mixBlendMode: "multiply"}}>
				<path fill="#011B04"
				      d="M41.781 31.999c.373-.33.71-.24.831-.154.524.188.366.745.239.94-.127.195-.365.496-.853.456-.487-.04-.683-.83-.217-1.242Z"/>
			</g>
			<path fill="#000"
			      d="M41.859 33.096c.28.21.714.107.968-.23.254-.338.232-.782-.048-.993-.28-.21-.714-.107-.968.23-.254.338-.233.782.048.993Z"/>
			<g filter="url(#B)">
				<path fill="#000"
				      d="M40.132 27.302c.41.104.81-.08.894-.413.084-.332-.18-.685-.59-.788-.41-.104-.81.08-.894.413-.084.332.18.685.59.788Z"/>
			</g>
			<g filter="url(#C)">
				<path fill="#000"
				      d="M41.82 32.1c.253-.338.681-.445.955-.239.274.206.29.646.036.983-.254.338-.682.445-.956.24-.274-.206-.29-.647-.036-.984Z"/>
			</g>
			<mask id="D" width="3" height="2" x="39" y="26" maskUnits="userSpaceOnUse" style={{maskType: "alpha"}}>
				<path fill="#202124"
				      d="M40.132 27.302c.41.104.81-.081.894-.413.084-.332-.18-.685-.59-.789-.41-.103-.81.082-.894.414-.084.332.18.685.59.788Z"/>
			</mask>
			<g mask="url(#D)">
				<g filter="url(#E)">
					<path fill="#D8D8D8" fillOpacity=".29"
					      d="M40.481 26.173c-.333-.12-.643-.037-.762.034.231-.142.484-.21.802-.092a.898.898 0 0 1 .425.372c.018.03.032.054.04.072l-.04-.072a1.13 1.13 0 0 0-.034-.05c-.06-.077-.172-.171-.43-.264Z"/>
				</g>
				<g filter="url(#F)" opacity=".8">
					<path fill="url(#G)"
					      d="M40.754 27.148c.335-.217.268-.529.193-.658.094.101.103.339.031.466a.513.513 0 0 1-.224.192Z"/>
				</g>
			</g>
			<mask id="H" width="2" height="3" x="41" y="31" maskUnits="userSpaceOnUse" style={{maskType: "alpha"}}>
				<path fill="#202124"
				      d="M41.82 32.1c.254-.338.682-.445.956-.239.274.206.29.646.036.983-.254.338-.682.445-.956.24-.274-.206-.29-.647-.036-.984Z"/>
			</mask>
			<g mask="url(#H)">
				<path fill="url(#I)"
				      d="M42.86 32.124a.466.466 0 0 0-.536-.294.517.517 0 0 1 .389.249c.106.185-.029.529-.11.677l.146.06a.681.681 0 0 0 .11-.692Z"/>
				<g filter="url(#J)">
					<path fill="#D8D8D8" fillOpacity=".29"
					      d="M42.798 32.761c-.184.303-.477.433-.615.452.27-.035.508-.14.682-.431a.897.897 0 0 0 .097-.557.652.652 0 0 0-.014-.08c.003.023.01.049.014.08l.006.06c.002.098-.027.242-.17.476Z"/>
				</g>
			</g>
			<g filter="url(#K)" opacity=".8">
				<path fill="#E2DCE1"
				      d="M40.68 26.417c-.069-.114-.23-.16-.302-.17l-.07.094a.57.57 0 0 1 .155.049c.066.032.145.087.177.11l.04-.083Z"/>
			</g>
			<g filter="url(#L)" opacity=".8">
				<path fill="#E2DCE1"
				      d="M42.801 32.452c.02.13-.072.264-.12.316l-.11-.03a.55.55 0 0 0 .086-.133c.03-.065.055-.156.064-.193l.08.04Z"/>
			</g>
			<g fill="#E2DCE1" filter="url(#M)" opacity=".8">
				<path
					d="M40.193 27.155a2.826 2.826 0 0 1-.158-.156h-.12a.53.53 0 0 0 .172.147l.106.01ZM40.723 27.175a.591.591 0 0 0 .079-.069l-.042.015a.496.496 0 0 1-.102.077c.01 0 .038-.005.065-.023Z"/>
			</g>
			<g fill="#E2DCE1" filter="url(#N)" opacity=".8">
				<path
					d="M41.952 32.171c-.012.07-.022.177-.025.221l-.093.075a.531.531 0 0 1 .041-.222l.077-.074ZM42.352 31.823a.597.597 0 0 1 .105.004l-.041.015a.487.487 0 0 0-.128.004.133.133 0 0 1 .064-.023Z"/>
			</g>
			<g filter="url(#O)" opacity=".3">
				<path fill="url(#P)" fillOpacity=".4"
				      d="M43.092 33.947c-1.52.536.542-2.544-.284-4.886-.826-2.342-4.364-3.446-2.845-3.982 1.379-.018 3.294 1.19 4.12 3.532.827 2.341-.005 4.666-.99 5.336Z"/>
			</g>
			<g filter="url(#Q)" opacity=".2">
				<path fill="url(#R)" fillOpacity=".4"
				      d="M43.092 33.947c-1.52.536.542-2.544-.284-4.886-.826-2.342-4.364-3.446-2.845-3.982 1.379-.018 3.294 1.19 4.12 3.532.827 2.341-.005 4.666-.99 5.336Z"/>
			</g>
			<path fill="#4386F5"
			      d="M17.716 27.587a2.408 2.408 0 0 0-1.549-1.147 2.776 2.776 0 0 0-2.005.296c-.617.35-1.079.913-1.285 1.567-.206.653-.083 1.443.242 2.017l2.378-1.227 2.22-1.506Z"/>
			<path fill="url(#S)" fillRule="evenodd"
			      d="M17.695 27.552c3.44 5.696 10.644 8.134 16.94 5.444l2.102 4.917c-8.782 3.753-18.82.35-23.62-7.596l4.578-2.765Z"
			      clipRule="evenodd"/>
			<path fill="#034ECA"
			      d="M16.689 47.509a.731.731 0 0 0 1.34.569l1.76-3.27a1.076 1.076 0 1 0-1.971-.837l-1.129 3.538Z"/>
			<path fill="url(#T)"
			      d="M16.689 47.509a.731.731 0 0 0 1.34.569l1.76-3.27a1.076 1.076 0 1 0-1.971-.837l-1.129 3.538Z"/>
			<path fill="#4285F4"
			      d="M25.674 16.685a3.027 3.027 0 1 1 5.689 2.071l-8.884 24.41a3.027 3.027 0 1 1-5.69-2.07l8.884-24.41Z"/>
			<path fill="url(#U)"
			      d="M19.407 45.143a3.018 3.018 0 0 0 3.14-1.97l7.216-19.828a3.018 3.018 0 0 0-.785-3.247l-9.572 25.045Z"/>
			<path fill="#4285F4" d="M31.962 11.175a1.904 1.904 0 0 0-3.809 0v3.613a1.904 1.904 0 0 0 3.809 0v-3.613Z"/>
			<path fill="url(#V)" d="M31.962 11.175a1.904 1.904 0 0 0-3.809 0v3.613a1.904 1.904 0 0 0 3.809 0v-3.613Z"/>
			<g filter="url(#W)" opacity=".5">
				<path fill="#044FCB"
				      d="M33.83 38.743c-.744.064.456-.857.273-2.999-.124-1.444.38-2.667 1.124-2.73.744-.064 1.448 1.055 1.572 2.5.617 2.313-2.224 3.166-2.968 3.23Z"/>
			</g>
			<path fill="url(#X)"
			      d="M28.691 18.728a2.993 2.993 0 0 1 5.62-2.06l8.961 24.456a2.993 2.993 0 1 1-5.62 2.06l-8.96-24.456Z"/>
			<path fill="url(#Y)"
			      d="M27.665 15.716a3.517 3.517 0 0 0-2.441 2.208l-8.422 23.129c-.514 1.41 0 2.934 1.097 3.618l9.766-28.955Z"/>
			<path fill="url(#Z)" fillOpacity=".9"
			      d="M28.5 11.473c.426.427 1.195.35 1.718-.173.522-.522.6-1.292.173-1.719-.427-.426-1.196-.349-1.719.173-.522.523-.6 1.292-.173 1.719Z"
			      opacity=".3"/>
			<path fill="url(#aa)" fillOpacity=".9"
			      d="M24.507 24.556c1.276.737 3.243-.28 4.393-2.272 1.15-1.992 1.048-4.204-.228-4.94-1.277-.738-3.243.28-4.393 2.272-1.15 1.992-1.048 4.204.228 4.94Z"
			      opacity=".3"/>
			<path fill="#fff" d="M30.009 22.064a3.71 3.71 0 1 0 0-7.422 3.71 3.71 0 0 0 0 7.422Z"/>
			<path fill="#202124" fillRule="evenodd"
			      d="M30.009 15.618a2.734 2.734 0 1 0 0 5.47 2.734 2.734 0 0 0 0-5.47Zm-4.688 2.735a4.687 4.687 0 1 1 9.375 0 4.687 4.687 0 0 1-9.375 0Z"
			      clipRule="evenodd"/>
		</g>
		<defs>
			<filter id="d" width="9.563" height="4.987" x="34.841" y="24.708" colorInterpolationFilters="sRGB"
			        filterUnits="userSpaceOnUse">
				<feFlood floodOpacity="0" result="BackgroundImageFix"/>
				<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
				<feGaussianBlur result="effect1_foregroundBlur_1970_8019" stdDeviation=".117"/>
			</filter>
			<filter id="f" width="6.998" height="8.636" x="37.797" y="27.708" colorInterpolationFilters="sRGB"
			        filterUnits="userSpaceOnUse">
				<feFlood floodOpacity="0" result="BackgroundImageFix"/>
				<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
				<feGaussianBlur result="effect1_foregroundBlur_1970_8019" stdDeviation=".176"/>
			</filter>
			<filter id="h" width="7.375" height="2.215" x="35.575" y="23.539" colorInterpolationFilters="sRGB"
			        filterUnits="userSpaceOnUse">
				<feFlood floodOpacity="0" result="BackgroundImageFix"/>
				<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
				<feGaussianBlur result="effect1_foregroundBlur_1970_8019" stdDeviation=".088"/>
			</filter>
			<filter id="i" width="4.963" height="5.877" x="40.181" y="31.559" colorInterpolationFilters="sRGB"
			        filterUnits="userSpaceOnUse">
				<feFlood floodOpacity="0" result="BackgroundImageFix"/>
				<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
				<feGaussianBlur result="effect1_foregroundBlur_1970_8019" stdDeviation=".088"/>
			</filter>
			<filter id="j" width="2.775" height="2.282" x="42.386" y="23.68" colorInterpolationFilters="sRGB"
			        filterUnits="userSpaceOnUse">
				<feFlood floodOpacity="0" result="BackgroundImageFix"/>
				<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
				<feGaussianBlur result="effect1_foregroundBlur_1970_8019" stdDeviation=".117"/>
			</filter>
			<filter id="k" width="1.937" height="2.488" x="42.453" y="23.233" colorInterpolationFilters="sRGB"
			        filterUnits="userSpaceOnUse">
				<feFlood floodOpacity="0" result="BackgroundImageFix"/>
				<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
				<feGaussianBlur result="effect1_foregroundBlur_1970_8019" stdDeviation=".029"/>
			</filter>
			<filter id="l" width="1.815" height="2.774" x="43.154" y="23.744" colorInterpolationFilters="sRGB"
			        filterUnits="userSpaceOnUse">
				<feFlood floodOpacity="0" result="BackgroundImageFix"/>
				<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
				<feGaussianBlur result="effect1_foregroundBlur_1970_8019" stdDeviation=".088"/>
			</filter>
			<filter id="o" width="3.021" height=".824" x="44.606" y="31.793" colorInterpolationFilters="sRGB"
			        filterUnits="userSpaceOnUse">
				<feFlood floodOpacity="0" result="BackgroundImageFix"/>
				<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
				<feGaussianBlur result="effect1_foregroundBlur_1970_8019" stdDeviation=".029"/>
			</filter>
			<filter id="q" width=".492" height="2.303" x="44.491" y="30.959" colorInterpolationFilters="sRGB"
			        filterUnits="userSpaceOnUse">
				<feFlood floodOpacity="0" result="BackgroundImageFix"/>
				<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
				<feGaussianBlur result="effect1_foregroundBlur_1970_8019" stdDeviation=".059"/>
			</filter>
			<filter id="r" width=".263" height=".729" x="44.705" y="30.59" colorInterpolationFilters="sRGB"
			        filterUnits="userSpaceOnUse">
				<feFlood floodOpacity="0" result="BackgroundImageFix"/>
				<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
				<feGaussianBlur result="effect1_foregroundBlur_1970_8019" stdDeviation=".035"/>
			</filter>
			<filter id="t" width="1.673" height="1.747" x="41.468" y="24.57" colorInterpolationFilters="sRGB"
			        filterUnits="userSpaceOnUse">
				<feFlood floodOpacity="0" result="BackgroundImageFix"/>
				<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
				<feGaussianBlur result="effect1_foregroundBlur_1970_8019" stdDeviation=".059"/>
			</filter>
			<filter id="u" width=".579" height=".555" x="42.843" y="25.981" colorInterpolationFilters="sRGB"
			        filterUnits="userSpaceOnUse">
				<feFlood floodOpacity="0" result="BackgroundImageFix"/>
				<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
				<feGaussianBlur result="effect1_foregroundBlur_1970_8019" stdDeviation=".035"/>
			</filter>
			<filter id="v" width="3.283" height="1.274" x="44.506" y="31.386" colorInterpolationFilters="sRGB"
			        filterUnits="userSpaceOnUse">
				<feFlood floodOpacity="0" result="BackgroundImageFix"/>
				<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
				<feGaussianBlur result="effect1_foregroundBlur_1970_8019" stdDeviation=".117"/>
			</filter>
			<filter id="w" width="3.215" height="1.735" x="44.739" y="30.672" colorInterpolationFilters="sRGB"
			        filterUnits="userSpaceOnUse">
				<feFlood floodOpacity="0" result="BackgroundImageFix"/>
				<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
				<feGaussianBlur result="effect1_foregroundBlur_1970_8019" stdDeviation=".088"/>
			</filter>
			<filter id="z" width="1.666" height="1.421" x="39.377" y="26.021" colorInterpolationFilters="sRGB"
			        filterUnits="userSpaceOnUse">
				<feFlood floodOpacity="0" result="BackgroundImageFix"/>
				<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
				<feGaussianBlur result="effect1_foregroundBlur_1970_8019" stdDeviation=".018"/>
			</filter>
			<filter id="A" width="1.531" height="1.551" x="41.48" y="31.73" colorInterpolationFilters="sRGB"
			        filterUnits="userSpaceOnUse">
				<feFlood floodOpacity="0" result="BackgroundImageFix"/>
				<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
				<feGaussianBlur result="effect1_foregroundBlur_1970_8019" stdDeviation=".018"/>
			</filter>
			<filter id="B" width="1.539" height="1.283" x="39.508" y="26.072" colorInterpolationFilters="sRGB"
			        filterUnits="userSpaceOnUse">
				<feFlood floodOpacity="0" result="BackgroundImageFix"/>
				<feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
				<feOffset dx="-.006" dy=".012"/>
				<feGaussianBlur stdDeviation=".006"/>
				<feComposite in2="hardAlpha" operator="out"/>
				<feColorMatrix values="0 0 0 0 0.0156863 0 0 0 0 0.231373 0 0 0 0 0.0666667 0 0 0 0.7 0"/>
				<feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1970_8019"/>
				<feBlend in="SourceGraphic" in2="effect1_dropShadow_1970_8019" result="shape"/>
			</filter>
			<filter id="C" width="1.376" height="1.455" x="41.621" y="31.756" colorInterpolationFilters="sRGB"
			        filterUnits="userSpaceOnUse">
				<feFlood floodOpacity="0" result="BackgroundImageFix"/>
				<feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
				<feOffset dx="-.006" dy=".012"/>
				<feGaussianBlur stdDeviation=".006"/>
				<feComposite in2="hardAlpha" operator="out"/>
				<feColorMatrix values="0 0 0 0 0.0156863 0 0 0 0 0.231373 0 0 0 0 0.0666667 0 0 0 0.7 0"/>
				<feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1970_8019"/>
				<feBlend in="SourceGraphic" in2="effect1_dropShadow_1970_8019" result="shape"/>
			</filter>
			<filter id="E" width="1.291" height=".527" x="39.707" y="26.044" colorInterpolationFilters="sRGB"
			        filterUnits="userSpaceOnUse">
				<feFlood floodOpacity="0" result="BackgroundImageFix"/>
				<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
				<feGaussianBlur result="effect1_foregroundBlur_1970_8019" stdDeviation=".006"/>
			</filter>
			<filter id="F" width=".277" height=".663" x="40.751" y="26.487" colorInterpolationFilters="sRGB"
			        filterUnits="userSpaceOnUse">
				<feFlood floodOpacity="0" result="BackgroundImageFix"/>
				<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
				<feGaussianBlur result="effect1_foregroundBlur_1970_8019" stdDeviation=".001"/>
			</filter>
			<filter id="J" width=".81" height="1.092" x="42.171" y="32.133" colorInterpolationFilters="sRGB"
			        filterUnits="userSpaceOnUse">
				<feFlood floodOpacity="0" result="BackgroundImageFix"/>
				<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
				<feGaussianBlur result="effect1_foregroundBlur_1970_8019" stdDeviation=".006"/>
			</filter>
			<filter id="K" width=".395" height=".276" x="40.296" y="26.236" colorInterpolationFilters="sRGB"
			        filterUnits="userSpaceOnUse">
				<feFlood floodOpacity="0" result="BackgroundImageFix"/>
				<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
				<feGaussianBlur result="effect1_foregroundBlur_1970_8019" stdDeviation=".006"/>
			</filter>
			<filter id="L" width=".256" height=".379" x="42.559" y="32.4" colorInterpolationFilters="sRGB"
			        filterUnits="userSpaceOnUse">
				<feFlood floodOpacity="0" result="BackgroundImageFix"/>
				<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
				<feGaussianBlur result="effect1_foregroundBlur_1970_8019" stdDeviation=".006"/>
			</filter>
			<filter id="M" width=".898" height=".211" x="39.91" y="26.993" colorInterpolationFilters="sRGB"
			        filterUnits="userSpaceOnUse">
				<feFlood floodOpacity="0" result="BackgroundImageFix"/>
				<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
				<feGaussianBlur result="effect1_foregroundBlur_1970_8019" stdDeviation=".003"/>
			</filter>
			<filter id="N" width=".635" height=".656" x="41.828" y="31.816" colorInterpolationFilters="sRGB"
			        filterUnits="userSpaceOnUse">
				<feFlood floodOpacity="0" result="BackgroundImageFix"/>
				<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
				<feGaussianBlur result="effect1_foregroundBlur_1970_8019" stdDeviation=".003"/>
			</filter>
			<filter id="O" width="5.301" height="9.398" x="39.354" y="24.844" colorInterpolationFilters="sRGB"
			        filterUnits="userSpaceOnUse">
				<feFlood floodOpacity="0" result="BackgroundImageFix"/>
				<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
				<feGaussianBlur result="effect1_foregroundBlur_1970_8019" stdDeviation=".117"/>
			</filter>
			<filter id="Q" width="5.301" height="9.398" x="39.354" y="24.844" colorInterpolationFilters="sRGB"
			        filterUnits="userSpaceOnUse">
				<feFlood floodOpacity="0" result="BackgroundImageFix"/>
				<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
				<feGaussianBlur result="effect1_foregroundBlur_1970_8019" stdDeviation=".117"/>
			</filter>
			<filter id="W" width="3.887" height="6.322" x="33.292" y="32.718" colorInterpolationFilters="sRGB"
			        filterUnits="userSpaceOnUse">
				<feFlood floodOpacity="0" result="BackgroundImageFix"/>
				<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
				<feGaussianBlur result="effect1_foregroundBlur_1970_8019" stdDeviation=".146"/>
			</filter>
			<linearGradient id="b" x1="42.948" x2="41.02" y1="48.281" y2="47.187" gradientUnits="userSpaceOnUse">
				<stop stopColor="#4285F4"/>
				<stop offset="1" stopColor="#034ECA"/>
			</linearGradient>
			<linearGradient id="e" x1="40.404" x2="39.793" y1="25.095" y2="27.261" gradientUnits="userSpaceOnUse">
				<stop stopColor="#A8F0B9"/>
				<stop offset="1" stopColor="#ADEEBC" stopOpacity="0"/>
			</linearGradient>
			<linearGradient id="g" x1="43.428" x2="41.593" y1="33.666" y2="32.364" gradientUnits="userSpaceOnUse">
				<stop stopColor="#A8F0B9"/>
				<stop offset="1" stopColor="#ADEEBC" stopOpacity="0"/>
			</linearGradient>
			<linearGradient id="G" x1="41.106" x2="40.595" y1="26.476" y2="26.682" gradientUnits="userSpaceOnUse">
				<stop stopColor="#E2DDE2"/>
				<stop offset="1" stopColor="#E2DDE2" stopOpacity="0"/>
			</linearGradient>
			<linearGradient id="I" x1="42.888" x2="42.46" y1="32.199" y2="32.35" gradientUnits="userSpaceOnUse">
				<stop stopColor="#373637"/>
				<stop offset="1" stopColor="#373637" stopOpacity="0"/>
			</linearGradient>
			<linearGradient id="P" x1="44.165" x2="42.043" y1="28.582" y2="29.331" gradientUnits="userSpaceOnUse">
				<stop stopColor="#A8F0B9"/>
				<stop offset="1" stopColor="#ADEEBC" stopOpacity="0"/>
			</linearGradient>
			<linearGradient id="R" x1="44.165" x2="42.043" y1="28.582" y2="29.331" gradientUnits="userSpaceOnUse">
				<stop stopColor="#A8F0B9"/>
				<stop offset="1" stopColor="#ADEEBC" stopOpacity="0"/>
			</linearGradient>
			<linearGradient id="S" x1="28.105" x2="37.382" y1="35.54" y2="34.808" gradientUnits="userSpaceOnUse">
				<stop stopColor="#4285F4"/>
				<stop offset=".703" stopColor="#044FCB"/>
			</linearGradient>
			<linearGradient id="T" x1="17.509" x2="19.509" y1="47.792" y2="46.612" gradientUnits="userSpaceOnUse">
				<stop stopColor="#4285F4"/>
				<stop offset="1" stopColor="#034ECA"/>
			</linearGradient>
			<linearGradient id="U" x1="26.686" x2="25.62" y1="31" y2="30.63" gradientUnits="userSpaceOnUse">
				<stop stopColor="#73A7FF"/>
				<stop offset="1" stopColor="#5893F6" stopOpacity="0"/>
			</linearGradient>
			<linearGradient id="V" x1="30.058" x2="31.734" y1="11.401" y2="12.909" gradientUnits="userSpaceOnUse">
				<stop stopColor="#4285F4"/>
				<stop offset="1" stopColor="#034ECA"/>
			</linearGradient>
			<linearGradient id="X" x1="31.933" x2="37.002" y1="21.266" y2="31.86" gradientUnits="userSpaceOnUse">
				<stop stopColor="#034DC9"/>
				<stop offset="1" stopColor="#4285F4"/>
			</linearGradient>
			<linearGradient id="Y" x1="19.667" x2="22.337" y1="29.995" y2="30.912" gradientUnits="userSpaceOnUse">
				<stop stopColor="#9BC0FF"/>
				<stop offset="1" stopColor="#5893F6" stopOpacity="0"/>
			</linearGradient>
			<radialGradient id="m" cx="0" cy="0" r="1" gradientTransform="matrix(-.26822 -.36786 .26657 -.19436 44.337 24.01)"
			                gradientUnits="userSpaceOnUse">
				<stop stopColor="#fff"/>
				<stop offset=".948" stopColor="#fff" stopOpacity="0"/>
			</radialGradient>
			<radialGradient id="n" cx="0" cy="0" r="1" gradientTransform="rotate(-126.097 31.536 3.769) scale(.45526 .3299)"
			                gradientUnits="userSpaceOnUse">
				<stop stopColor="#fff"/>
				<stop offset=".948" stopColor="#fff" stopOpacity="0"/>
			</radialGradient>
			<radialGradient id="x" cx="0" cy="0" r="1" gradientTransform="rotate(-156.205 23.27 9.157) scale(.17761 .3235)"
			                gradientUnits="userSpaceOnUse">
				<stop stopColor="#93E19F"/>
				<stop offset="1" stopColor="#93E19F" stopOpacity="0"/>
			</radialGradient>
			<radialGradient id="y" cx="0" cy="0" r="1" gradientTransform="matrix(-.0815 .15773 -.28727 -.14844 42.627 31.933)"
			                gradientUnits="userSpaceOnUse">
				<stop stopColor="#93E19F"/>
				<stop offset="1" stopColor="#93E19F" stopOpacity="0"/>
			</radialGradient>
			<radialGradient id="Z" cx="0" cy="0" r="1" gradientTransform="matrix(-.58937 .5997 -.4178 -.4106 29.445 10.527)"
			                gradientUnits="userSpaceOnUse">
				<stop stopColor="#fff"/>
				<stop offset=".948" stopColor="#fff" stopOpacity="0"/>
			</radialGradient>
			<radialGradient id="aa" cx="0" cy="0" r="1" gradientTransform="rotate(119.61 7.2 18.211) scale(2.61787 1.43021)"
			                gradientUnits="userSpaceOnUse">
				<stop stopColor="#fff"/>
				<stop offset=".948" stopColor="#fff" stopOpacity="0"/>
			</radialGradient>
			<clipPath id="a">
				<rect width="60" height="60" fill="#fff" rx="2.344"/>
			</clipPath>
		</defs>
	</svg>
)

export const JavaLogo = ({className}: { className?: string }) => (
	<svg className={cn("size-12.5!", className)} width="800px" height="800px" viewBox="-118.513 4.399 540.906 540.906"
	     xmlns="http://www.w3.org/2000/svg">
		<path
			d="M285.104 430.945h-2.037v-1.14h5.486v1.14h-2.025v5.688h-1.424v-5.688zm10.942.297h-.032l-2.02 5.393h-.924l-2.006-5.393h-.024v5.393h-1.343v-6.828h1.976l1.86 4.835 1.854-4.835h1.969v6.828h-1.311l.001-5.393z"
			fill="#e76f00"/>
		<path
			d="M102.681 291.324s-14.178 8.245 10.09 11.035c29.4 3.354 44.426 2.873 76.825-3.259 0 0 8.518 5.341 20.414 9.967-72.63 31.128-164.376-1.803-107.329-17.743M93.806 250.704s-15.902 11.771 8.384 14.283c31.406 3.24 56.208 3.505 99.125-4.759 0 0 5.937 6.018 15.271 9.309-87.815 25.678-185.624 2.025-122.78-18.833"
			fill="#5382a1"/>
		<path
			d="M168.625 181.799c17.896 20.604-4.701 39.146-4.701 39.146s45.439-23.458 24.571-52.833c-19.491-27.395-34.438-41.005 46.479-87.934.001-.001-127.013 31.721-66.349 101.621"
			fill="#e76f00"/>
		<path
			d="M264.684 321.369s10.492 8.646-11.555 15.333c-41.923 12.7-174.488 16.535-211.314.507-13.238-5.76 11.587-13.752 19.396-15.429 8.144-1.766 12.798-1.437 12.798-1.437-14.722-10.371-95.157 20.363-40.857 29.166 148.084 24.015 269.944-10.814 231.532-28.14M109.499 208.617s-67.431 16.016-23.879 21.832c18.389 2.462 55.047 1.905 89.192-.956 27.906-2.354 55.928-7.358 55.928-7.358s-9.84 4.214-16.959 9.074c-68.475 18.01-200.756 9.631-162.674-8.79 32.206-15.568 58.392-13.802 58.392-13.802M230.462 276.231c69.608-36.171 37.425-70.932 14.96-66.248-5.506 1.146-7.961 2.139-7.961 2.139s2.045-3.202 5.947-4.588c44.441-15.624 78.619 46.081-14.346 70.521 0 0 1.079-.962 1.4-1.824"
			fill="#5382a1"/>
		<path
			d="M188.495 4.399s38.55 38.562-36.563 97.862c-60.233 47.567-13.735 74.689-.025 105.678-35.158-31.723-60.96-59.647-43.65-85.637 25.406-38.151 95.792-56.648 80.238-117.903"
			fill="#e76f00"/>
		<path
			d="M116.339 374.246c66.815 4.277 169.417-2.373 171.846-33.987 0 0-4.67 11.984-55.219 21.503-57.027 10.731-127.364 9.479-169.081 2.601.002-.002 8.541 7.067 52.454 9.883"
			fill="#5382a1"/>
		<path
			d="M105.389 495.049c-6.303 5.467-12.96 8.536-18.934 8.536-8.527 0-13.134-5.113-13.134-13.314 0-8.871 4.937-15.357 24.739-15.357h7.328l.001 20.135m17.392 19.623V453.93c0-15.518-8.85-25.756-30.188-25.756-12.457 0-23.369 3.076-32.238 6.999l2.56 10.752c6.983-2.563 16.022-4.949 24.894-4.949 12.292 0 17.58 4.949 17.58 15.181v7.678h-6.135c-29.865 0-43.337 11.593-43.337 28.993 0 15.018 8.878 23.554 25.594 23.554 10.745 0 18.766-4.437 26.264-10.929l1.361 9.221 13.645-.002zM180.824 514.672h-21.691l-26.106-84.96h18.944l16.198 52.199 3.601 15.699c8.195-22.698 13.992-45.726 16.891-67.898h18.427c-4.938 27.976-13.822 58.684-26.264 84.96M264.038 495.049c-6.315 5.467-12.983 8.536-18.958 8.536-8.512 0-13.131-5.113-13.131-13.314 0-8.871 4.947-15.357 24.748-15.357h7.341v20.135m17.39 19.623V453.93c0-15.518-8.871-25.756-30.186-25.756-12.465 0-23.381 3.076-32.246 6.999l2.557 10.752c6.985-2.563 16.041-4.949 24.906-4.949 12.283 0 17.579 4.949 17.579 15.181v7.678h-6.146c-29.873 0-43.34 11.593-43.34 28.993 0 15.018 8.871 23.554 25.584 23.554 10.752 0 18.77-4.437 26.28-10.929l1.366 9.221 13.646-.002zM36.847 529.099c-4.958 7.239-12.966 12.966-21.733 16.206L6.527 535.2c6.673-3.424 12.396-8.954 15.055-14.104 2.3-4.581 3.252-10.485 3.252-24.604v-96.995h18.478v95.666c-.001 18.875-1.51 26.5-6.465 33.936"
			fill="#e76f00"/>
	</svg>
)

export const MySQLLogo = ({className}: { className?: string }) => (
	<svg className={className} xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 32 32"
	     lang="en">
		<path
			d="M8.785,6.865a3.055,3.055,0,0,0-.785.1V7h.038a6.461,6.461,0,0,0,.612.785c.154.306.288.611.441.917.019-.019.038-.039.038-.039a1.074,1.074,0,0,0,.4-.957,4.314,4.314,0,0,1-.23-.4c-.115-.191-.364-.287-.517-.44"
			style={{fill: "#5d87a1", fillRule: "evenodd"}}/>
		<path
			d="M27.78,23.553a8.849,8.849,0,0,0-3.712.536c-.287.115-.745.115-.785.478.154.153.172.4.307.613a4.467,4.467,0,0,0,.995,1.167c.4.306.8.611,1.225.879.745.461,1.588.728,2.314,1.187.422.268.842.612,1.264.9.21.153.343.4.611.5v-.058a3.844,3.844,0,0,0-.291-.613c-.191-.19-.383-.363-.575-.554a9.118,9.118,0,0,0-1.99-1.932c-.613-.422-1.953-1-2.2-1.7l-.039-.039a7.69,7.69,0,0,0,1.321-.308c.65-.172,1.243-.133,1.912-.3.307-.077.862-.268.862-.268v-.3c-.342-.34-.587-.795-.947-1.116a25.338,25.338,0,0,0-3.122-2.328c-.587-.379-1.344-.623-1.969-.946-.226-.114-.6-.17-.737-.36a7.594,7.594,0,0,1-.776-1.457c-.548-1.04-1.079-2.193-1.551-3.293a20.236,20.236,0,0,0-.965-2.157A19.078,19.078,0,0,0,11.609,5a9.07,9.07,0,0,0-2.421-.776c-.474-.02-.946-.057-1.419-.075A7.55,7.55,0,0,1,6.9,3.485C5.818,2.8,3.038,1.328,2.242,3.277,1.732,4.508,3,5.718,3.435,6.343A8.866,8.866,0,0,1,4.4,7.762c.133.322.171.663.3,1A22.556,22.556,0,0,0,5.687,11.3a8.946,8.946,0,0,0,.7,1.172c.153.209.417.3.474.645a5.421,5.421,0,0,0-.436,1.419,8.336,8.336,0,0,0,.549,6.358c.3.473,1.022,1.514,1.987,1.116.851-.34.662-1.419.908-2.364.056-.229.019-.379.132-.53V19.3s.483,1.061.723,1.6a10.813,10.813,0,0,0,2.4,2.59A3.514,3.514,0,0,1,14,24.657V25h.427A1.054,1.054,0,0,0,14,24.212a9.4,9.4,0,0,1-.959-1.16,24.992,24.992,0,0,1-2.064-3.519c-.3-.6-.553-1.258-.793-1.857-.11-.231-.11-.58-.295-.7a7.266,7.266,0,0,0-.884,1.313,11.419,11.419,0,0,0-.517,2.921c-.073.02-.037,0-.073.038-.589-.155-.792-.792-1.014-1.332a8.756,8.756,0,0,1-.166-5.164c.128-.405.683-1.681.461-2.068-.111-.369-.48-.58-.682-.871a7.767,7.767,0,0,1-.663-1.237C5.912,9.5,5.69,8.3,5.212,7.216a10.4,10.4,0,0,0-.921-1.489A9.586,9.586,0,0,1,3.276,4.22c-.092-.213-.221-.561-.074-.793a.3.3,0,0,1,.259-.252c.238-.212.921.058,1.16.174a9.2,9.2,0,0,1,1.824.967c.258.194.866.685.866.685h.18c.612.133,1.3.037,1.876.21a12.247,12.247,0,0,1,2.755,1.32,16.981,16.981,0,0,1,5.969,6.545c.23.439.327.842.537,1.3.4.94.9,1.9,1.3,2.814a12.578,12.578,0,0,0,1.36,2.564c.286.4,1.435.612,1.952.822a13.7,13.7,0,0,1,1.32.535c.651.4,1.3.861,1.913,1.3.305.23,1.262.708,1.32,1.091"
			style={{fill: "#00758f", fillRule: "evenodd"}}/>
	</svg>
)

export const SeleniumLogo = ({className}: { className?: string }) => (
	<svg className={className} xmlns="http://www.w3.org/2000/svg" id="selenium_logo" viewBox="0,0,32.5,34"
	     data-name="Selenium Logo" lang="en">
		<path
			d="m21.45 21.51a2.49 2.49 0 0 0 -2.55 2.21.08.08 0 0 0 .08.1h4.95a.08.08 0 0 0 .08-.09 2.41 2.41 0 0 0 -2.56-2.22z"
			fill="#01a71c"/>
		<path
			d="m32.06 4.91-10.5 11.79a.32.32 0 0 1 -.47 0l-5.36-5.53a.32.32 0 0 1 0-.4l1.77-2.27a.32.32 0 0 1 .52 0l3 3.32a.32.32 0 0 0 .49 0l8.36-11.46a.23.23 0 0 0 -.18-.36h-29.44a.25.25 0 0 0 -.25.25v33.5a.25.25 0 0 0 .25.25h32a.25.25 0 0 0 .25-.25v-28.69a.23.23 0 0 0 -.44-.15zm-23 25.36a8.08 8.08 0 0 1 -5.74-2 .31.31 0 0 1 0-.41l1.25-1.75a.31.31 0 0 1 .43-.11 6.15 6.15 0 0 0 4.2 1.64c1.64 0 2.44-.76 2.44-1.56 0-2.48-8.08-.78-8.08-6.06 0-2.33 2-4.27 5.32-4.27a7.88 7.88 0 0 1 5.25 1.76.31.31 0 0 1 0 .43l-1.23 1.71a.31.31 0 0 1 -.45.05 6.08 6.08 0 0 0 -3.84-1.32c-1.28 0-2 .57-2 1.41 0 2.23 8.06.74 8.06 6 0 2.54-1.83 4.48-5.62 4.48zm17.62-4.87a.27.27 0 0 1 -.28.28h-7.4a.09.09 0 0 0 -.08.1 2.81 2.81 0 0 0 3 2.32 4.62 4.62 0 0 0 2.56-.84.27.27 0 0 1 .4.06l.9 1.31a.28.28 0 0 1 -.06.37 6.67 6.67 0 0 1 -4.1 1.28 5.28 5.28 0 0 1 -5.57-5.48 5.31 5.31 0 0 1 5.4-5.46c3.11 0 5.22 2.33 5.22 5.74z"
			fill="#01a71c"/>
	</svg>
)

export const TestNGLogo = ({className}: { className?: string }) => (
	<svg className={cn("size-15!", className)} xmlns="http://www.w3.org/2000/svg"
	     xmlnsXlink="http://www.w3.org/1999/xlink"
	     width="1024pt" height="576pt" viewBox="0 0 1024 576">
		<defs/>
		<text id="shape0"
		      transform="matrix(3.77091615177051 0 0 4.5178569253534 41.9999784699227 403.464257434976)" fill="#FFFFFF"
		      stroke-opacity="0" stroke="#FFFFFF" stroke-width="0" stroke-linecap="square" stroke-linejoin="bevel"
		      font-family="Verdana" font-size="72" font-size-adjust="0.222222" font-stretch="normal" letter-spacing="0"
		      word-spacing="0">
			<tspan>
				<tspan x="0">Test</tspan>
				<tspan fill="#d00000">N</tspan>
				<tspan fill="#ffea00">G</tspan>
			</tspan>
		</text>
	</svg>
)

export const ApachePOILogo = ({className}: { className?: string }) => (
	<svg className={className} xmlns="http://www.w3.org/2000/svg"
	     xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 64 64"
	     width="64" height="64" enableBackground={"new 0 0 64 64"} lang="en">
		<style type="text/css">{`
			.st0{fill:#FF0000;}
			.st1{fill:#007F00;}
			.st2{fill:#0000FF;}
			.st3{fill:#C0AF83;}
			.st4{fill:#CCAF5F;}
			.st5{fill:#FFFFFF;}
			.st6{fill:#CDCDCD;}
			.st7{fill:#616162;}
			.st8{fill:#F8F1D7;}
			.st9{fill:#EBECA1;}
			.st10{fill:#218F21;}
			.st11{fill:#FE2E2E;}
			.st12{fill:#2E51A8;}
		`}</style>
		<switch>
			<g>
				<g>
					<path className="st0"
					      d="M8.3,63.8c-1.1-1.1,4.9-12.9,9.2-18.2c1.8-2.2,4.7-5.2,6.5-6.7c1.8-1.5,3.3-3.1,3.3-3.5     c0-0.4-0.8-1.2-1.8-1.7c-3.4-1.9-8.4-7.1-11.1-11.5c-1.8-2.9-2.8-4.8-3.6-5.1c-0.8,0.4-1.4-0.4-1.4-0.8c-0.8-2,2.9-4.1,4.5-3.6     c1.5,0.3,2,3,2.4,4.1c1,2.5,0.8,2.3,1.8,4.3c2.2,4.5,5.8,8.3,9.6,10.2c2.9,1.4,3.9,2.9,3.3,4.5c-0.2,0.6-3.5,4.1-7.2,7.8     c-7,7-10.2,11.2-12.4,16.1c-0.5,1.1-1,2.3-1.5,3.4C9.4,63.9,8.7,64.2,8.3,63.8L8.3,63.8z M54.8,62.9c-0.4-0.4,0-1.1,0.6-1.1     c0.2,0,0.4,0.3,0.4,0.7C55.8,63.2,55.3,63.4,54.8,62.9L54.8,62.9z M52,56.6c-1.1-2.4-3.2-5.7-4.5-7.3c-2.5-3.1-10.5-10.1-11-10.5     c-1-1-2.8-1.5-2.4-4c0.1-0.5,2-2.2,4.3-3.8c5.8-4,8.6-7.8,10.4-14.2c0.9-3.3,2-4.6,3.4-4.1c1.2,0.4,1.2,0.9-0.1,4.5     c-2.3,6.3-5.8,10.6-12.4,15c-2,1.3-3.6,2.3-3.6,3.1c0.1,1.4,1.3,2.1,4.8,5.3c3.2,2.8,7.1,7.3,9.5,10.8c2.8,4.2,4.8,8.5,4.2,9.1     C54.2,60.8,53.3,59.5,52,56.6L52,56.6z"/>
					<g>
						<circle className="st1" cx="32.4" cy="23.8" r="1.6"/>
						<circle className="st1" cx="35.4" cy="26.8" r="1.2"/>
						<circle className="st1" cx="32.6" cy="26.8" r="0.9"/>
						<circle className="st1" cx="34.3" cy="30.3" r="0.6"/>
						<circle className="st1" cx="32.7" cy="29.1" r="0.4"/>
						<circle className="st1" cx="32.4" cy="33.9" r="0.6"/>
						<circle className="st1" cx="33.1" cy="37.4" r="0.4"/>
						<circle className="st1" cx="30.4" cy="40.6" r="0.4"/>
					</g>
					<g>
						<circle className="st0" cx="28.2" cy="26.1" r="1.6"/>
						<circle className="st0" cx="24.6" cy="25.7" r="1.2"/>
						<circle className="st0" cx="29.1" cy="29.8" r="1.1"/>
						<circle className="st0" cx="25.5" cy="28" r="0.6"/>
						<circle className="st0" cx="36.5" cy="29.8" r="0.5"/>
						<circle className="st0" cx="27.1" cy="29.1" r="0.4"/>
						<circle className="st0" cx="34" cy="31.8" r="0.4"/>
						<circle className="st0" cx="32.6" cy="35.6" r="0.4"/>
						<circle className="st0" cx="30.8" cy="38.7" r="0.4"/>
						<circle className="st0" cx="33.1" cy="38.8" r="0.4"/>
						<circle className="st0" cx="34.9" cy="41" r="0.4"/>
					</g>
					<g>
						<circle className="st2" cx="38.6" cy="25" r="1.4"/>
						<circle className="st2" cx="39" cy="28.2" r="0.8"/>
						<circle className="st2" cx="41.1" cy="25.2" r="0.6"/>
						<circle className="st2" cx="40.9" cy="26.8" r="0.4"/>
						<circle className="st2" cx="30.8" cy="26.9" r="0.4"/>
						<circle className="st2" cx="31.9" cy="31.1" r="0.9"/>
						<circle className="st2" cx="31.7" cy="37.3" r="0.4"/>
						<circle className="st2" cx="32.2" cy="40.1" r="0.4"/>
						<circle className="st2" cx="34.5" cy="39.7" r="0.4"/>
					</g>
					<g>
						<circle className="st3" cx="29" cy="41" r="0.4"/>
						<circle className="st3" cx="28.1" cy="42.9" r="0.4"/>
						<circle className="st3" cx="29.9" cy="42.4" r="0.4"/>
						<circle className="st3" cx="31.3" cy="42.9" r="0.4"/>
						<circle className="st3" cx="31.8" cy="41.5" r="0.4"/>
						<circle className="st3" cx="33.5" cy="41.5" r="0.4"/>
						<circle className="st3" cx="34" cy="42.9" r="0.4"/>
						<circle className="st3" cx="35.4" cy="42.9" r="0.4"/>
						<circle className="st3" cx="36.7" cy="42.4" r="0.4"/>
					</g>
					<g transform="translate(-392.84 -284.95) scale(3.1597)">
						<g transform="translate(.012 -1.728)">
							<ellipse cx="134.7" cy="109.4" rx="3.9" ry="1.1"/>
							<ellipse cx="134.7" cy="109.6" rx="3.9" ry="1.1"/>
							<ellipse className="st4" cx="134.7" cy="109.4" rx="3.8" ry="1.1"/>
						</g>
						<path
							d="M134.7,104c-1.2,0-2.4,0.3-2.4,0.7l0,0.7c0.2,1.7,1.1,2.8,2.3,2.8c1.2,0,1.7-0.6,2.1-1.5c1.9-1,1.3-1.6,0.2-1.4l0-0.6      C137,104.3,135.9,104,134.7,104L134.7,104z M137.4,105.5c0.3,0,0.3,0.3,0.1,0.5l-0.7,0.5c0-0.3,0.1-0.3,0.2-1L137.4,105.5z"/>
						<path className="st4"
						      d="M132.4,105.5c0,0.5,0.5,2.6,2.2,2.6c1.7,0,2.2-1.7,2.2-2.6C135.4,106.3,133.6,106,132.4,105.5z"/>
						<path className="st5"
						      d="M132.4,105.4c0.3,0.2,1.5,0.5,2.2,0.5c0.7,0,1.1,0,2.2-0.5l0-0.4c-0.1,0.2-1.2,0.6-2.2,0.6      c-1.1,0-1.8-0.2-2.2-0.6L132.4,105.4z"/>
						<ellipse className="st5" cx="134.7" cy="104.7" rx="2.2" ry="0.6"/>
						<path className="st3"
						      d="M132.8,105.1c0.4,0.2,0.8,0.4,1.8,0.3c1,0,1.7-0.2,2-0.4c-0.4-0.3-0.8-0.4-1.8-0.4      C133.7,104.6,133.1,104.8,132.8,105.1z"/>
					</g>
					<path className="st6"
					      d="M25.4,1.5L25.4,1.5L25.4,1.5C25.4,1.5,25.4,1.5,25.4,1.5L25.4,1.5z M33.1,1.5L33.1,1.5     c-0.3,0-0.6,0.1-1.1,0.2c-0.2,0-0.3,0.1-0.5,0.1c-0.1,0-0.2,0-0.3,0c-0.4,0-0.8,0-1.1,0c-1,0-2,0-3-0.1c-0.4,0-0.7,0-1.1-0.1     l-0.1,0C25.9,2,26,2.4,26,3.1l0,0c0.6,0,1,0,1.3,0h0c1.2,0,1.9,0.4,5.1-0.2c1.1-0.2,1.6,0.5,2,0.9c1.5,1.4,3,2.2,4.3,1.6     c1.3-0.3,1.9-1.4,3.3-2c0-0.5,0-1-0.1-1.3c-0.1,0.1-0.1,0.1-0.2,0.2c-0.5,0.3-1,0.7-1.5,1c-1.1,0.5-1.9,1.1-2.7,1     c-0.2,0-0.4-0.1-0.6-0.1c-0.4-0.2-0.9-0.5-1.6-1.1c-0.4-0.3-0.7-0.7-1-1.1h0c-0.2-0.1-0.4-0.3-0.6-0.4c0,0-0.1,0-0.1,0     C33.4,1.6,33.3,1.5,33.1,1.5L33.1,1.5L33.1,1.5z M28,3.3C28,3.3,28,3.3,28,3.3C28,3.3,28,3.3,28,3.3z M27.6,4.8     c-0.5,0.1-1.2,0-1.9,0.1c-1.8,0-3.4,0.6-4.9,1.9C19.9,7.4,19.3,7.6,18,8c-0.7,0.2-1.2,0.4-1.7,0.6c-0.3,0.1-0.5,0.2-0.8,0.2     c0,0,0,0,0,0c-0.1,0-0.3,0.1-0.4,0.1l0.5,1.7c0,0,0.1,0,0.1,0.1c1.7-0.9,1.9-1,3.1-1.3c0,0,1,3.2,1,3.7c0.1,0.5,1.3,3.5,1.8,4.8     c0.5,1.3,1.7,3.7,1.9,4.4c0.3,0.3,0.3,0,3.1-1c1.2-0.6,2.5-1.2,2.8-1.4c-0.1-0.2-0.1-0.5-0.2-0.7c0,0.3-0.2,0.4-0.6,0.5l-4.9,2.3     l-0.4-1.1c-0.5-1.1-0.9-2.2-1.5-3.2c-0.8-1.6-1.5-3.5-1.7-4.8l-0.9-3.7c1.7-1.4,4.6-2.6,6.4-3l1.7-0.3V4.8z M25.9,6.9     c-1,0.1-2.7,0.9-4.2,2c-1.3,1-1.4,1.2-1.1,2.6c0.6,2.4,1.4,4.8,2.4,7.1h0c0.6,1.3,1.1,2.4,1.1,2.4c0.1,0,3-1.3,4.1-1.8     c0.2-0.2,0.2-0.4,0-1.4c-0.1-0.6-0.5-3.2-0.8-5.7c-0.3-2.5-0.7-4.8-0.9-5C26.5,6.9,26.2,6.9,25.9,6.9z M26,7.5     c0.7-0.2,1.3,5.8,1.8,9.4c0,0.3,0.4,1.7-0.1,1.9l-3.2,1.4l-1-2.5c-0.7-1.6-1.2-3.3-1.7-5c-0.6-2.5-0.6-2.6,0.5-3.3     C23,8.9,25.3,7.7,26,7.5z M39.1,8.2c-0.2,0.2-0.3,0.6-0.4,1.2l1.6,0.3c0.9,0.1,2.6,0.3,3.8,0.3c1.4,0,2.5,0.3,3.3,1l1.5,1     c0.3-0.5,0.5-0.9,0.5-1.5l0,0c-0.4-0.1-0.8-0.4-1.6-0.8c-0.3-0.1-0.6-0.3-0.9-0.4c-0.9-0.3-1.7-0.5-2.6-0.6     c-0.5-0.1-0.9-0.1-1.4-0.2C41.3,8.3,39.6,8.3,39.1,8.2L39.1,8.2z M39.2,10.3l-0.9,5.4c-0.6,5.3-1.3,5.8-0.3,5.3     c0-1.6,0.6-5.5,0.8-6l0.7-4.1l1.4,0.5c0.8,0.2,2.1,0.4,2.8,0.4c3.2,0.4,2.7,0.4,1.6,3.6h0c-0.6,1.8-0.9,4.1-1.7,6     c-0.4,1.3-0.3,1.2-0.1,1.2c0.6,0,1.3-2.9,1.8-5c0.2-1.1,0.8-2.7,1.2-3.7c0.7-1.8,0.5-2.5-0.9-2.6c-1.5-0.1-3.1-0.4-4.6-0.6     L39.2,10.3z"/>
					<path className="st7"
					      d="M41.9,0.6c-0.2,0-0.5,0.1-0.8,0.3c0,0,0,0-0.1,0.1c0.6-0.3,1-0.4,1.2-0.3C42.1,0.6,42,0.6,41.9,0.6z      M42.3,0.6c0.2,0.4,0.3,0.6,0.3,0.7C42.6,1,42.4,0.8,42.3,0.6z M25.4,1.5l0,0.2c0.1,0.6,0.2,1,0,1.4c0.2,0,0.4,0,0.5,0h0     c0-0.7,0-1.1-0.1-1.3C25.6,1.7,25.5,1.6,25.4,1.5L25.4,1.5z M42.6,1.6c0,0-0.1,0.1-0.1,0.1c-0.2,0.2-0.4,0.3-0.6,0.5     C42.1,3.1,42,5,41.3,6.9c0.2,0,0.4,0,0.6,0C42,5.1,42.6,2.9,42.6,1.6L42.6,1.6z M28.1,4.2c0,0.1-0.1,0.3-0.1,0.3l1,0.1     c0,0.3,0,0.6,0,0.8c-0.3,0-0.6-0.1-0.8-0.1l0,0c0-0.4-0.1-0.6-0.1-0.9c-0.1,0.1-0.3,0.2-0.5,0.3V7c0.3,4.7,0.6,5.6,1.1,8.6     c0.4,3.4,1.2,6.2,1.5,5.4c0-0.3-0.2-1.3-0.4-2c0.4,0.1,0.8,0.1,1.2,0.2c0,0.2,0,0.4,0,0.5v0l0.3-0.1l0.1-0.4     c0.4,0.1,0.9,0.2,1.3,0.3c0.2,0.1,0.3,0.1,0.5,0.2c0,0.2-0.1,0.4-0.1,0.6l0,0l0.3-0.1c0-0.2,0.1-0.3,0.1-0.5     c0.6,0.2,1.2,0.4,1.7,0.5c-0.1,0.2-0.1,0.5-0.2,0.7v0l0.3,0c0.1-0.2,0.1-0.4,0.2-0.6c0.3,0.1,0.6,0.1,0.9,0.2     c-0.1,0.2-0.1,0.5-0.2,0.7c0.4,0.4,0.3,0.2,0.5-0.3c0.4-0.6,1.1-4.7,1.8-10.1c0.2-1.5,0.4-2.4,0.6-2.7c0,0-0.1,0-0.1,0     c-0.2-0.1-0.4-0.1-0.5-0.3c0,0,0,0,0,0c-0.3-0.1-0.5-0.1-0.8-0.2c0.1-0.3,0.1-0.5,0.2-0.8c0.2,0,0.5,0.1,0.7,0.2     c0-0.1,0-0.2,0.1-0.3v0c0,0,0.1,0,0.2,0c-0.4-0.1-0.9-0.2-1.2-0.2c-0.8-0.2-1.7-0.4-2.5-0.7l-0.3-0.1c-0.5-0.2-1.1-0.3-1.6-0.5     c-0.3-0.1-0.6-0.2-1-0.3l-0.3-0.1c-0.9-0.2-1.8-0.4-2.7-0.5l-0.3,0L28.1,4.2L28.1,4.2z M21.1,4.5c-0.3,0.1-0.7,0.3-1,0.4     C20.4,4.7,20.7,4.6,21.1,4.5z M29.3,4.7C30.2,4.8,31.1,5,32,5.2C32,5.5,32,5.7,31.9,6c-0.9-0.2-1.8-0.4-2.6-0.5     C29.3,5.2,29.3,4.9,29.3,4.7z M32.3,5.3c0.3,0.1,0.6,0.1,0.9,0.2c0.6,0.3,1.1,0.5,1.7,0.6c-0.1,0.2-0.1,0.5-0.1,0.7     c-0.5-0.2-1-0.3-1.5-0.5c-0.3-0.1-0.7-0.2-1-0.3C32.2,5.8,32.3,5.6,32.3,5.3L32.3,5.3z M28.2,5.6c0.3,0,0.5,0.1,0.8,0.1     c0,0.3,0,0.6,0,0.9c-0.2,0-0.5-0.1-0.7-0.1L28.2,5.6z M29.3,5.8c0.9,0.1,1.7,0.3,2.6,0.5c0,0.3-0.1,0.6-0.1,0.9     c-0.8-0.2-1.7-0.4-2.5-0.5C29.2,6.4,29.2,6.1,29.3,5.8L29.3,5.8z M35.1,6.2c0.9,0.3,1.7,0.5,2.5,0.6c-0.1,0.3-0.1,0.5-0.2,0.8     C36.6,7.4,35.8,7.2,35,7C35,6.7,35.1,6.5,35.1,6.2z M32.2,6.4c0.3,0.1,0.6,0.1,1,0.2c0.6,0.2,1.1,0.4,1.5,0.6     c-0.1,0.3-0.1,0.5-0.2,0.8c-0.5-0.1-0.9-0.3-1.4-0.4c-0.4-0.1-0.7-0.2-1.1-0.3C32.1,7,32.1,6.7,32.2,6.4z M28.2,6.8l0.7,0.1     c0,0.3,0,0.6,0,0.9l-0.6-0.1C28.3,7.4,28.3,7.2,28.2,6.8L28.2,6.8z M29.2,7c0.8,0.1,1.7,0.3,2.5,0.5c0,0.3-0.1,0.6-0.1,0.9     C30.8,8.2,30,8,29.2,7.9C29.2,7.6,29.2,7.3,29.2,7L29.2,7z M34.9,7.3c0.9,0.3,1.7,0.5,2.4,0.6c-0.1,0.3-0.2,0.6-0.2,0.9     c-0.8-0.2-1.6-0.4-2.4-0.7C34.8,7.8,34.9,7.6,34.9,7.3z M32,7.6c0.3,0.1,0.7,0.1,1,0.3c0.5,0.2,1,0.4,1.4,0.5     c0,0.3-0.1,0.5-0.1,0.8c-0.4-0.1-0.8-0.3-1.2-0.4c-0.4-0.1-0.8-0.2-1.2-0.3C31.9,8.2,32,7.9,32,7.6z M37.6,8     c0.3,0,0.5,0.1,0.8,0.1c-0.1,0.3-0.1,0.6-0.2,0.9C38,9,37.7,8.9,37.4,8.9C37.5,8.6,37.6,8.3,37.6,8z M28.3,8     c0.2,0,0.4,0.1,0.6,0.1c0,0.4,0,0.7,0,1.1c-0.2,0-0.4-0.1-0.5-0.1C28.3,8.6,28.3,8.5,28.3,8z M29.2,8.2c0.8,0.1,1.6,0.3,2.4,0.5     c0,0.3-0.1,0.7-0.1,1c-0.8-0.2-1.5-0.3-2.3-0.4C29.2,8.9,29.2,8.5,29.2,8.2L29.2,8.2z M34.7,8.5c0.9,0.3,1.6,0.5,2.4,0.6     c-0.1,0.3-0.1,0.6-0.2,0.9c-0.8-0.2-1.5-0.4-2.3-0.7C34.6,9,34.7,8.7,34.7,8.5z M25.8,8.6c-0.2,0-0.8,0.2-1.2,0.4     c-0.5,0.3-1.2,0.7-1.6,0.9c-0.4,0.3-1.2,0.8-0.9,0.8c0.3,0,1.7-0.7,3.5-1.8C25.9,8.7,25.9,8.6,25.8,8.6L25.8,8.6z M49.5,8.6     c0.3,0.1,0.6,0.3,0.7,0.4c0.2,0.1,0.1,0.8,0.1,1c-0.2,0.6-0.4,0.7-0.9,0.5c0,1.1-0.4,1.3-1.3,2.8c-0.8,1.9-0.9,2.2-1.9,5     c0,1-2.7,5.5-3.2,5.5c-0.3,0-0.3,0.2-0.2,0.5c0.5,0.8,1.7-0.5,3-3.5c0.7-1.5,1.4-3.5,1.6-4.3c0.2-0.9,0.9-2.5,1.7-3.6     c1.5-2.3,1.7-4.2,0.5-4.2C49.6,8.6,49.5,8.6,49.5,8.6L49.5,8.6z M31.9,8.8c0.4,0.1,0.7,0.2,1.1,0.3c0.5,0.2,0.9,0.3,1.3,0.5     c-0.1,0.3-0.1,0.6-0.1,1c-0.4-0.1-0.8-0.3-1.2-0.4c-0.3-0.1-0.7-0.2-1.1-0.3C31.8,9.4,31.8,9.1,31.9,8.8z M14.9,8.9     c0.2,0.8,0.6,2.2,1.4,4.8c2,5.8,4.1,10,5.3,10.4c0.4,0.1,0.4-0.2-0.3-0.9c-1.7-2-2.8-3.8-4.6-8.9l-1.6-5.4     C15.1,8.9,15,8.9,14.9,8.9L14.9,8.9z M37.3,9.1c0.3,0.1,0.6,0.1,0.9,0.2c0,0.3-0.1,0.6-0.1,0.9c-0.3-0.1-0.7-0.1-1-0.2     C37.2,9.7,37.3,9.4,37.3,9.1z M28.4,9.4c0.2,0,0.3,0.1,0.5,0.1c0,0.3,0,0.7,0,1c-0.2,0-0.3,0-0.5,0L28.4,9.4L28.4,9.4z M29.2,9.5     c0.7,0.1,1.5,0.3,2.2,0.5c0,0.3,0,0.6,0,0.9c-0.7-0.2-1.5-0.3-2.2-0.4C29.2,10.2,29.2,9.9,29.2,9.5L29.2,9.5z M34.5,9.6     c0.8,0.3,1.6,0.5,2.3,0.6c-0.1,0.3-0.1,0.7-0.2,1c-0.7-0.2-1.5-0.4-2.2-0.6C34.4,10.3,34.5,9.9,34.5,9.6z M26.2,10     c-0.1,0-0.2,0-0.3,0l-3,1.5c-0.3,0.2-0.4,0.2-0.6,0.3c-0.2,0.2,0,0.2,0.2,0.2c0.4,0,3.3-1.5,3.8-1.8C26.4,10.1,26.3,10,26.2,10     L26.2,10z M31.8,10.1c0.3,0.1,0.6,0.1,1,0.2c0.5,0.2,0.9,0.4,1.3,0.5c0,0.3,0,0.6-0.1,0.8c-0.4-0.1-0.8-0.2-1.2-0.4     c-0.4-0.1-0.7-0.2-1.1-0.3C31.7,10.7,31.8,10.4,31.8,10.1z M37.1,10.3c0.3,0.1,0.7,0.1,1,0.2c0,0.3-0.1,0.7-0.1,1.1     c-0.4-0.1-0.7-0.1-1.1-0.2C37,11,37,10.6,37.1,10.3L37.1,10.3z M28.5,10.7c0.1,0,0.3,0,0.5,0c0,0.3,0,0.5,0,0.8     c0,0.1,0,0.2,0,0.3c-0.2,0-0.3-0.1-0.5-0.1C28.5,11.6,28.5,11,28.5,10.7L28.5,10.7z M29.2,10.8c0.7,0.1,1.4,0.3,2.2,0.4     c0,0.2,0,0.4,0,0.6c0,0.1,0,0.3,0,0.4c-0.7-0.2-1.4-0.3-2.1-0.4c0-0.2,0-0.3-0.1-0.5C29.2,11.2,29.3,11,29.2,10.8z M34.3,10.9     L34.3,10.9c0.8,0.3,1.5,0.4,2.2,0.6c0,0.3-0.1,0.5-0.1,0.8c-0.7-0.2-1.4-0.4-2.1-0.6C34.3,11.5,34.3,11.2,34.3,10.9L34.3,10.9z      M18.4,11l-2,0.8l0.2,0.2l2-0.8L18.4,11z M26.2,11.1l-1.9,0.9c-0.9,0.4-1.7,0.8-1.8,0.9v0c-0.1,0.2,0,0.3,0.1,0.3     c0.4-0.3,3.1-1.4,3.7-1.9L26.2,11.1z M31.7,11.3c0.3,0.1,0.7,0.1,1,0.2c0.5,0.2,0.9,0.3,1.3,0.5c0,0.2,0,0.4-0.1,0.6     c0,0.1,0,0.3,0,0.4c-0.4-0.1-0.8-0.2-1.1-0.4c-0.3-0.1-0.7-0.2-1-0.3c0-0.2,0-0.3,0-0.5C31.7,11.6,31.7,11.5,31.7,11.3L31.7,11.3     z M18.7,11.6l-2,0.8l0.2,0.2l2-0.8L18.7,11.6z M36.9,11.6c0.4,0.1,0.7,0.1,1.1,0.2l-0.1,0.9c-0.4-0.1-0.7-0.2-1.1-0.3     C36.8,12.1,36.8,11.9,36.9,11.6z M40,12l-0.1,0.2l5.7,0.8l0.1-0.2L40,12z M28.5,12c0.1,0,0.3,0,0.5,0.1c0,0.3,0,0.7,0.1,1     c-0.1,0-0.2,0-0.4-0.1c0-0.2-0.1-0.7-0.2-0.8C28.6,12.2,28.5,12,28.5,12L28.5,12z M34.2,12.1c0.8,0.3,1.5,0.4,2.1,0.5     c0,0.2-0.1,0.4-0.1,0.7c0,0.1,0,0.2,0,0.3c-0.7-0.2-1.4-0.3-2-0.6c0-0.2,0-0.3,0-0.5C34.2,12.4,34.2,12.3,34.2,12.1z M29.3,12.1     c0.7,0.1,1.4,0.2,2,0.4c0,0.3,0,0.7,0,1c-0.6-0.2-1.3-0.3-1.9-0.4C29.4,12.8,29.4,12.5,29.3,12.1z M18.9,12.2l-2,0.8l0.2,0.2     l2-0.8L18.9,12.2z M31.7,12.6c0.3,0.1,0.6,0.1,0.9,0.2c0.4,0.2,0.8,0.3,1.2,0.5c0,0.3,0,0.7-0.1,1c-0.4-0.1-0.7-0.2-1.1-0.4     c-0.3-0.1-0.6-0.2-1-0.3C31.7,13.3,31.7,13,31.7,12.6z M36.7,12.7c0.4,0.1,0.8,0.2,1.1,0.2c0,0.4-0.1,0.7-0.1,1.1     c-0.4-0.1-0.8-0.2-1.1-0.3c0-0.2,0-0.3,0-0.4C36.6,13.1,36.6,12.9,36.7,12.7L36.7,12.7z M39.8,12.7L39.7,13l5.7,0.8l0.1-0.2     L39.8,12.7z M28.8,13.3c0.1,0,0.2,0,0.3,0.1c0,0.4,0.1,0.8,0.1,1.3c-0.2,0-0.2,0-0.2,0C29,14.6,28.8,13.3,28.8,13.3z M29.5,13.4     c0.6,0.1,1.2,0.3,1.9,0.4c0,0.4,0,0.8,0,1.2c-0.6-0.1-1.2-0.3-1.7-0.3C29.6,14.3,29.5,13.8,29.5,13.4L29.5,13.4z M34.2,13.4     c0.8,0.2,1.4,0.4,2,0.5c0,0.4-0.1,0.7-0.1,1.1c-0.6-0.2-1.3-0.4-1.9-0.6C34.2,14.1,34.2,13.8,34.2,13.4L34.2,13.4z M39.6,13.5     l-0.1,0.2l5.7,0.8l0.1-0.2L39.6,13.5z M19.4,13.8l-2,0.8l0.2,0.2l2-0.8L19.4,13.8z M31.7,13.9c0.3,0.1,0.6,0.1,0.9,0.2     c0.4,0.2,0.8,0.3,1.2,0.5c0,0.4,0,0.7-0.1,1.1c-0.4-0.1-0.7-0.2-1.1-0.3c-0.3-0.1-0.6-0.2-0.9-0.3C31.7,14.7,31.7,14.4,31.7,13.9     z M36.5,14c0.4,0.1,0.7,0.2,1.1,0.2l0.1-0.1c-0.1,0.4-0.1,0.9-0.2,1.3c-0.4-0.1-0.7-0.2-1-0.3C36.4,14.8,36.5,14.4,36.5,14     L36.5,14z M39.4,14.3l-0.1,0.2l5.7,0.8l0.1-0.2L39.4,14.3z M19.7,14.4l-2,0.8l0.2,0.2l2-0.8L19.7,14.4z M34.1,14.8     c0.7,0.2,1.3,0.4,1.9,0.5c0,0.3-0.1,0.7-0.1,1c-0.6-0.2-1.2-0.3-1.8-0.5C34.1,15.5,34.1,15.2,34.1,14.8z M29.1,14.8     c0,0,0,0,0.2,0c0,0.4,0,0.7,0.1,1.1C29.2,15.4,29.1,15.3,29.1,14.8L29.1,14.8z M29.6,14.9c0.6,0.1,1.2,0.2,1.7,0.4     c0,0.4,0,0.8,0,1.2c-0.5-0.1-1.1-0.2-1.6-0.3C29.6,15.7,29.6,15.3,29.6,14.9L29.6,14.9z M19.9,15l-2,0.8L18,16l2-0.8L19.9,15z      M39.2,15.2l-0.1,0.2l5.7,0.8l0.1-0.2L39.2,15.2z M31.7,15.4c0.3,0.1,0.5,0.1,0.8,0.2c0.4,0.2,0.8,0.3,1.2,0.4     c0,0.4-0.1,0.7-0.1,1.1c-0.3-0.1-0.6-0.2-0.9-0.3c-0.3-0.1-0.7-0.2-1-0.3C31.7,16.2,31.7,15.8,31.7,15.4z M36.4,15.4     c0.3,0.1,0.7,0.2,1,0.2l0.1-0.1c-0.2,1.3-0.4,2.6-0.7,3.9c-0.3-0.1-0.6-0.2-0.9-0.2c0.1-0.4,0.1-0.7,0.2-1.1     c0.3,0,0.5,0.1,0.8,0.2l0.1-0.2c-0.3-0.1-0.6-0.1-0.8-0.2c0.1-0.3,0.1-0.7,0.2-1.1c0.3,0.1,0.6,0.1,0.9,0.2l0.1-0.2     c-0.3-0.1-0.6-0.2-0.9-0.2C36.3,16.1,36.3,15.8,36.4,15.4L36.4,15.4z M39.1,16L39,16.3l5.7,0.8l0.1-0.2L39.1,16z M34,16.1     c0.7,0.2,1.3,0.3,1.8,0.5c-0.1,0.4-0.1,0.7-0.2,1.1c-0.6-0.1-1.2-0.3-1.8-0.5C34,16.9,34,16.5,34,16.1L34,16.1z M29.6,16.4     c0.5,0.1,1.1,0.2,1.6,0.3c0,0.4,0,0.8-0.1,1.1c-0.5-0.1-1-0.2-1.6-0.3C29.7,17.2,29.7,16.8,29.6,16.4L29.6,16.4z M20.4,16.4     l-2,0.8l0.2,0.2l2-0.8L20.4,16.4z M31.6,16.8c0.3,0.1,0.6,0.1,0.9,0.2c0.4,0.2,0.7,0.3,1,0.4c0,0.3-0.1,0.7-0.1,1     c-0.2-0.1-0.4-0.1-0.6-0.2c-0.4-0.1-0.9-0.2-1.3-0.3C31.6,17.6,31.6,17.2,31.6,16.8L31.6,16.8z M39,16.8L38.8,17l5.6,0.8l0.1-0.2     L39,16.8z M20.7,17l-2,0.8l0.2,0.2l2-0.8L20.7,17z M33.9,17.5c0.6,0.2,1.2,0.3,1.8,0.4c-0.1,0.4-0.1,0.7-0.2,1.1     c-0.6-0.2-1.2-0.3-1.7-0.5C33.8,18.2,33.8,17.9,33.9,17.5z M21,17.6l-2,0.8l0.2,0.2l2-0.8L21,17.6z M38.8,17.6l-0.1,0.2l5.5,0.8     l0.1-0.2L38.8,17.6z M29.6,17.8c0.5,0.1,1,0.2,1.5,0.3c0,0.3-0.1,0.6-0.1,0.9c-0.4-0.1-0.9-0.2-1.3-0.2c-0.1-0.3-0.1-0.5-0.2-0.9     C29.6,17.8,29.6,17.8,29.6,17.8z M31.5,18.1c0.4,0.1,0.8,0.2,1.2,0.3c0.2,0.1,0.4,0.2,0.6,0.2c0,0.3-0.1,0.6-0.1,0.9     c-0.2,0-0.3-0.1-0.5-0.1c-0.5-0.2-0.9-0.2-1.4-0.4C31.4,18.7,31.5,18.4,31.5,18.1z M38.7,18.5l-0.1,0.2l5.4,0.8l0.1-0.2     L38.7,18.5z M33.7,18.8c0.6,0.2,1.2,0.4,1.7,0.5c-0.1,0.3-0.1,0.5-0.2,0.8c-0.6-0.1-1.1-0.3-1.7-0.5     C33.6,19.3,33.6,19.1,33.7,18.8L33.7,18.8z M38.6,19.3l-0.1,0.2l5.3,0.9l0.1-0.2L38.6,19.3z M35.7,19.3c0.3,0.1,0.6,0.1,1,0.2     c-0.1,0.3-0.2,0.6-0.2,0.8c-0.3-0.1-0.6-0.1-0.9-0.2C35.6,19.9,35.7,19.6,35.7,19.3z"/>
					<path className="st8"
					      d="M31.8,10.1c0,0.3,0,0.6-0.1,0.9c0.4,0.1,0.7,0.2,1.1,0.3c0.4,0.1,0.8,0.2,1.2,0.4c0-0.3,0-0.6,0.1-0.9     c-0.4-0.1-0.8-0.3-1.3-0.5C32.4,10.2,32.1,10.2,31.8,10.1L31.8,10.1z"/>
					<path className="st9"
					      d="M29.2,7c0,0.3,0,0.6,0,0.9C30,8,30.8,8.2,31.6,8.4c0-0.3,0.1-0.6,0.1-0.9C30.9,7.3,30,7.1,29.2,7L29.2,7z"/>
					<path className="st10"
					      d="M25.7,16c-0.8-2.7-0.8-3-0.1-3.2c0.3-0.1,0.6,0.6,0.8,1.6c0.2,1,0.4,2.2,0.6,2.8c0.2,0.6,0.1,1-0.2,1     C26.5,18.2,26,17.2,25.7,16L25.7,16z"/>
					<path className="st11"
					      d="M24.8,18.8c-0.6-1.3-0.5-2.3-1.1-3.5c0.2-0.2,0.5-0.4,0.7-0.3c0.7,0.4,1.2,2.8,1.4,3.6     C25.2,19,24.9,19.1,24.8,18.8z"/>
					<path className="st12"
					      d="M38.7,6.8c0.6,0.1,3.8,0.1,4.8,0c1.6-0.1,5.4,1.3,6.7,2.1c0.2,0.1,0.1,0.8,0.1,1c-0.3,1-0.7,0.7-2.5-0.4     c-0.9-0.5-3.1-1-4.9-1.2c-1.7-0.2-3.6-0.1-4-0.2C38.6,8.1,38.2,8.2,38.7,6.8L38.7,6.8z M14.7,8.4c0-0.5-0.3-0.9,0-1.2     c1.1-0.3,1.6,0.1,3.1-0.9c2.6-1.8,5.8-3.2,8.1-3.2c1.9,0,2.3,0.1,2.3,0.6c0,0.4-0.2,0.8-0.2,0.8c-0.4,0.6-1.4,0.2-2.4,0.4     c-1.8,0-3.4,0.6-4.9,1.9C19.9,7.4,19.3,7.6,18,8C15.6,8.8,14.7,9.4,14.7,8.4L14.7,8.4z M34.3,2.1C32.8,1,33.2,2,30.1,2     c-4.8-0.1-4.8-0.1-4.8-0.9c0-0.5,0.7-0.6,3-0.6c1.6,0,2.2,0,3-0.3C31.6,0.1,32.1,0,32.7,0c1.2,0,2.3,0.5,3.3,1.5     c0.5,0.5,1.3,1.7,1.6,1.5c0.2,0.1,1.4-0.9,2.2-1.3c1.2-0.8,2.4-1.3,2.6-1.1c0.4,0.9,0.5,0.9,0.2,1.2c-0.3,0.3-1,0.8-2.3,1.6     C37.9,4.4,37.3,5.5,34.3,2.1L34.3,2.1z"/>
				</g>
			</g>
		</switch>
	</svg>
)

export const MavenLogo = ({className}: { className?: string }) => (
	<svg className={cn("size-17.5!", className)} xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox={"0 0 340 86"}
	     width="340"
	     height="86" id="svg3055"
	     lang="en">
		<defs id="defs3059">
			<linearGradient x1="0" y1="0" x2="1" y2="0" id="linearGradient12648" xlinkHref="#linearGradient11392"
			                gradientUnits="userSpaceOnUse" gradientTransform="translate(-44.21456,-9.8500092)"/>
			<linearGradient x1="-7708.7969" y1="-803.36011" x2="-7633.1528" y2="-714.90741" id="linearGradient5344"
			                xlinkHref="#SVGID_1_" gradientUnits="userSpaceOnUse"
			                gradientTransform="matrix(0.4226,-0.9063,0.9063,0.4226,4226.9761,-6584.5938)"/>
			<linearGradient x1="-8268.6387" y1="-813.12323" x2="-7728.9585" y2="-813.12323" id="linearGradient5346"
			                xlinkHref="#SVGID_2_" gradientUnits="userSpaceOnUse"
			                gradientTransform="matrix(0.4226,-0.9063,0.9063,0.4226,4226.9761,-6584.5938)"/>
			<linearGradient x1="-8203.4922" y1="-758.99402" x2="-7881.895" y2="-758.99402" id="linearGradient5348"
			                xlinkHref="#SVGID_3_" gradientUnits="userSpaceOnUse"
			                gradientTransform="matrix(0.4226,-0.9063,0.9063,0.4226,4226.9761,-6584.5938)"/>
			<linearGradient x1="-8238.3281" y1="-818.15222" x2="-7698.647" y2="-818.15222" id="linearGradient5350"
			                xlinkHref="#SVGID_4_" gradientUnits="userSpaceOnUse"
			                gradientTransform="matrix(0.4226,-0.9063,0.9063,0.4226,4226.9761,-6584.5938)"/>
			<linearGradient x1="-8198.9678" y1="-810.85059" x2="-7915.3501" y2="-810.85059" id="linearGradient5352"
			                xlinkHref="#SVGID_5_" gradientUnits="userSpaceOnUse"
			                gradientTransform="matrix(0.4226,-0.9063,0.9063,0.4226,4226.9761,-6584.5938)"/>
			<linearGradient x1="-8238.3281" y1="-762.29712" x2="-7698.647" y2="-762.29712" id="linearGradient5354"
			                xlinkHref="#SVGID_6_" gradientUnits="userSpaceOnUse"
			                gradientTransform="matrix(0.4226,-0.9063,0.9063,0.4226,4226.9761,-6584.5938)"/>
			<linearGradient x1="-8271.8057" y1="-765.07068" x2="-7732.125" y2="-765.07068" id="linearGradient5356"
			                xlinkHref="#SVGID_7_" gradientUnits="userSpaceOnUse"
			                gradientTransform="matrix(0.4226,-0.9063,0.9063,0.4226,4226.9761,-6584.5938)"/>
			<linearGradient x1="-8238.3281" y1="-745.68481" x2="-7698.647" y2="-745.68481" id="linearGradient5358"
			                xlinkHref="#SVGID_8_" gradientUnits="userSpaceOnUse"
			                gradientTransform="matrix(0.4226,-0.9063,0.9063,0.4226,4226.9761,-6584.5938)"/>
			<linearGradient x1="-8238.3281" y1="-747.58557" x2="-7698.647" y2="-747.58557" id="linearGradient5360"
			                xlinkHref="#SVGID_9_" gradientUnits="userSpaceOnUse"
			                gradientTransform="matrix(0.4226,-0.9063,0.9063,0.4226,4226.9761,-6584.5938)"/>
			<linearGradient x1="-7935.1431" y1="-747.9668" x2="-7815.856" y2="-747.9668" id="linearGradient5362"
			                xlinkHref="#SVGID_10_" gradientUnits="userSpaceOnUse"
			                gradientTransform="matrix(0.4226,-0.9063,0.9063,0.4226,4226.9761,-6584.5938)"/>
			<linearGradient x1="-7708.7969" y1="-803.36011" x2="-7633.1528" y2="-714.90741" id="linearGradient7396"
			                xlinkHref="#SVGID_1_" gradientUnits="userSpaceOnUse"
			                gradientTransform="matrix(0.4226,-0.9063,0.9063,0.4226,4226.9761,-6584.5938)"/>
			<linearGradient x1="-8268.6387" y1="-813.12323" x2="-7728.9585" y2="-813.12323" id="linearGradient7398"
			                xlinkHref="#SVGID_2_" gradientUnits="userSpaceOnUse"
			                gradientTransform="matrix(0.4226,-0.9063,0.9063,0.4226,4226.9761,-6584.5938)"/>
			<linearGradient x1="-8203.4922" y1="-758.99402" x2="-7881.895" y2="-758.99402" id="linearGradient7400"
			                xlinkHref="#SVGID_3_" gradientUnits="userSpaceOnUse"
			                gradientTransform="matrix(0.4226,-0.9063,0.9063,0.4226,4226.9761,-6584.5938)"/>
			<linearGradient x1="-8238.3281" y1="-818.15222" x2="-7698.647" y2="-818.15222" id="linearGradient7402"
			                xlinkHref="#SVGID_4_" gradientUnits="userSpaceOnUse"
			                gradientTransform="matrix(0.4226,-0.9063,0.9063,0.4226,4226.9761,-6584.5938)"/>
			<linearGradient x1="-8198.9678" y1="-810.85059" x2="-7915.3501" y2="-810.85059" id="linearGradient7404"
			                xlinkHref="#SVGID_5_" gradientUnits="userSpaceOnUse"
			                gradientTransform="matrix(0.4226,-0.9063,0.9063,0.4226,4226.9761,-6584.5938)"/>
			<linearGradient x1="-8238.3281" y1="-762.29712" x2="-7698.647" y2="-762.29712" id="linearGradient7406"
			                xlinkHref="#SVGID_6_" gradientUnits="userSpaceOnUse"
			                gradientTransform="matrix(0.4226,-0.9063,0.9063,0.4226,4226.9761,-6584.5938)"/>
			<linearGradient x1="-8271.8057" y1="-765.07068" x2="-7732.125" y2="-765.07068" id="linearGradient7408"
			                xlinkHref="#SVGID_7_" gradientUnits="userSpaceOnUse"
			                gradientTransform="matrix(0.4226,-0.9063,0.9063,0.4226,4226.9761,-6584.5938)"/>
			<linearGradient x1="-8238.3281" y1="-745.68481" x2="-7698.647" y2="-745.68481" id="linearGradient7410"
			                xlinkHref="#SVGID_8_" gradientUnits="userSpaceOnUse"
			                gradientTransform="matrix(0.4226,-0.9063,0.9063,0.4226,4226.9761,-6584.5938)"/>
			<linearGradient x1="-8238.3281" y1="-747.58557" x2="-7698.647" y2="-747.58557" id="linearGradient7412"
			                xlinkHref="#SVGID_9_" gradientUnits="userSpaceOnUse"
			                gradientTransform="matrix(0.4226,-0.9063,0.9063,0.4226,4226.9761,-6584.5938)"/>
			<linearGradient x1="-7935.1431" y1="-747.9668" x2="-7815.856" y2="-747.9668" id="linearGradient7414"
			                xlinkHref="#SVGID_10_" gradientUnits="userSpaceOnUse"
			                gradientTransform="matrix(0.4226,-0.9063,0.9063,0.4226,4226.9761,-6584.5938)"/>
		</defs>
		<text x="199.61313" y="196.18768" id="text11870" xmlSpace="preserve"
		      style={{
			      fontStyle: 'italic',
			      fontVariant: 'normal',
			      fontWeight: 'bold',
			      fontStretch: 'normal',
			      fontSize: '14px',
			      lineHeight: '0%',
			      fontFamily: '\'Alte Haas Grotesk\'',
			      letterSpacing: '0px',
			      wordSpacing: '0px',
			      fill: 'url(#linearGradient12648)',
			      fillOpacity: '1',
			      stroke: 'none'
		      }}>
			<tspan x="199.61313" y="196.18768" id="tspan11872" style={{fill: 'url(#linearGradient12648)', fillOpacity: '1'}}/>
		</text>
		<g id="g8927">
			<g transform="matrix(0.09561334,-0.07017507,0.07017507,0.09561334,132.73733,36.368381)" id="g7248">
				<linearGradient x1="-7708.7969" y1="-803.36011" x2="-7633.1528" y2="-714.90741" id="linearGradient7250"
				                gradientUnits="userSpaceOnUse"
				                gradientTransform="matrix(0.4226,-0.9063,0.9063,0.4226,4226.9761,-6584.5938)">
					<stop id="stop7252" style={{stopColor: '#f69923', stopOpacity: '1'}} offset="0"/>
					<stop id="stop7254" style={{stopColor: '#f79a23', stopOpacity: '1'}} offset="0.3123"/>
					<stop id="stop7256" style={{stopColor: '#e97826', stopOpacity: '1'}} offset="0.83829999"/>
				</linearGradient>
				<path
					d="m 267.1,19.6 c -8.4,5 -22.4,19 -39,39.3 l 15.3,28.9 c 10.7,-15.4 21.7,-29.2 32.7,-41 0.8,-0.9 1.3,-1.4 1.3,-1.4 -0.4,0.5 -0.9,0.9 -1.3,1.4 -3.6,3.9 -14.4,16.5 -30.7,41.6 15.7,-0.8 39.8,-4 59.5,-7.4 5.9,-32.8 -5.7,-47.8 -5.7,-47.8 0,0 -14.8,-23.9 -32.1,-13.6 z"
					id="path7258" style={{fill: 'url(#linearGradient7396)'}}/>
				<path
					d="m 241.1,184.4 c 0.1,0 0.2,0 0.3,-0.1 l -2.2,0.2 c -0.1,0.1 -0.3,0.1 -0.4,0.2 0.8,-0.1 1.6,-0.2 2.3,-0.3 z"
					id="path7260" style={{fill: 'none'}}/>
				<path d="m 225.5,236.1 c -1.2,0.3 -2.5,0.5 -3.8,0.7 1.3,-0.2 2.6,-0.4 3.8,-0.7 z" id="path7262"
				      style={{fill: 'none'}}/>
				<path
					d="m 119.3,352.2 c 0.2,-0.4 0.3,-0.9 0.5,-1.3 3.4,-8.9 6.7,-17.5 10,-26 3.7,-9.4 7.4,-18.6 11,-27.5 3.8,-9.3 7.6,-18.4 11.3,-27.1 3.9,-9.2 7.7,-18 11.5,-26.5 3.1,-6.9 6.1,-13.6 9.1,-20.1 1,-2.2 2,-4.3 3,-6.4 2,-4.2 3.9,-8.3 5.8,-12.3 1.8,-3.7 3.5,-7.3 5.2,-10.9 0.6,-1.2 1.2,-2.4 1.7,-3.5 0.1,-0.2 0.2,-0.4 0.3,-0.6 l -1.9,0.2 -1.5,-2.9 c -0.1,0.3 -0.3,0.6 -0.4,0.9 -2.7,5.3 -5.4,10.7 -8,16.2 -1.5,3.1 -3,6.3 -4.6,9.5 -4.2,8.8 -8.3,17.6 -12.3,26.6 -4.1,9 -8.1,18.1 -12,27.1 -3.9,8.9 -7.6,17.8 -11.3,26.7 -3.7,8.9 -7.3,17.7 -10.8,26.5 -3.7,9.2 -7.3,18.3 -10.7,27.3 -0.8,2 -1.6,4.1 -2.3,6.1 -2.8,7.3 -5.5,14.4 -8.1,21.5 l 2.4,4.7 2.1,-0.2 c 0.1,-0.2 0.2,-0.4 0.2,-0.6 3.1,-9.5 6.5,-18.6 9.8,-27.4 z"
					id="path7264" style={{fill: 'none'}}/>
				<path d="m 220.7,236.9 0,0 c 0,0 0,0 0,0 0,0 0,0 0,0 z" id="path7266" style={{fill: 'none'}}/>
				<path d="m 215.6,262.2 c -2,0.4 -4,0.7 -6,1 0,0 0,0 0,0 1,-0.1 2.1,-0.3 3.1,-0.5 1,-0.1 2,-0.3 2.9,-0.5 z"
				      id="path7268" style={{fill: '#be202e'}}/>
				<path d="m 215.6,262.2 c -2,0.4 -4,0.7 -6,1 0,0 0,0 0,0 1,-0.1 2.1,-0.3 3.1,-0.5 1,-0.1 2,-0.3 2.9,-0.5 z"
				      id="path7270" style={{opacity: '0.35', fill: '#be202e'}}/>
				<path
					d="m 220.8,236.9 c 0,0 0,0 0,0 -0.1,0 -0.1,0 0,0 0.3,0 0.6,-0.1 0.9,-0.1 1.3,-0.2 2.6,-0.4 3.8,-0.7 -1.5,0.3 -3.1,0.5 -4.7,0.8 l 0,0 0,0 z"
					id="path7272" style={{fill: '#be202e'}}/>
				<path
					d="m 220.8,236.9 c 0,0 0,0 0,0 -0.1,0 -0.1,0 0,0 0.3,0 0.6,-0.1 0.9,-0.1 1.3,-0.2 2.6,-0.4 3.8,-0.7 -1.5,0.3 -3.1,0.5 -4.7,0.8 l 0,0 0,0 z"
					id="path7274" style={{opacity: '0.35', fill: '#be202e'}}/>
				<linearGradient x1="-8268.6387" y1="-813.12323" x2="-7728.9585" y2="-813.12323" id="linearGradient7276"
				                gradientUnits="userSpaceOnUse"
				                gradientTransform="matrix(0.4226,-0.9063,0.9063,0.4226,4226.9761,-6584.5938)">
					<stop id="stop7278" style={{stopColor: '#9e2064', stopOpacity: '1'}} offset="0.3233"/>
					<stop id="stop7280" style={{stopColor: '#c92037', stopOpacity: '1'}} offset="0.63020003"/>
					<stop id="stop7282" style={{stopColor: '#cd2335', stopOpacity: '1'}} offset="0.75139999"/>
					<stop id="stop7284" style={{stopColor: '#e97826', stopOpacity: '1'}} offset="1"/>
				</linearGradient>
				<path
					d="m 198.2,162.4 c 4.7,-8.7 9.4,-17.2 14.1,-25.5 4.9,-8.6 9.9,-16.9 15,-25 0.3,-0.5 0.6,-1 0.9,-1.4 5,-7.9 10,-15.5 15.1,-22.8 L 228,58.9 c -1.1,1.4 -2.3,2.8 -3.5,4.3 -4.4,5.5 -9,11.4 -13.7,17.7 -5.3,7.1 -10.7,14.6 -16.3,22.5 -5.1,7.3 -10.3,15 -15.5,22.9 -4.4,6.8 -8.8,13.7 -13.2,20.8 -0.2,0.3 -0.3,0.5 -0.5,0.8 l 19.9,39.3 c 4.4,-8.3 8.7,-16.6 13,-24.8 z"
					id="path7286" style={{fill: 'url(#linearGradient7398)'}}/>
				<linearGradient x1="-8203.4922" y1="-758.99402" x2="-7881.895" y2="-758.99402" id="linearGradient7288"
				                gradientUnits="userSpaceOnUse"
				                gradientTransform="matrix(0.4226,-0.9063,0.9063,0.4226,4226.9761,-6584.5938)">
					<stop id="stop7290" style={{stopColor: '#282662', stopOpacity: '1'}} offset="0"/>
					<stop id="stop7292" style={{stopColor: '#662e8d', stopOpacity: '1'}} offset="0.0954839"/>
					<stop id="stop7294" style={{stopColor: '#9f2064', stopOpacity: '1'}} offset="0.78820002"/>
					<stop id="stop7296" style={{stopColor: '#cd2032', stopOpacity: '1'}} offset="0.94870001"/>
				</linearGradient>
				<path
					d="m 107.5,384.1 c -2.6,7.2 -5.3,14.6 -7.9,22.2 0,0.1 -0.1,0.2 -0.1,0.3 -0.4,1.1 -0.8,2.1 -1.1,3.2 -1.8,5.1 -3.3,9.7 -6.9,20.1 5.9,2.7 10.6,9.7 15,17.7 -0.5,-8.3 -3.9,-16.1 -10.4,-22.1 28.9,1.3 53.9,-6 66.7,-27.2 1.1,-1.9 2.2,-3.9 3.2,-6 -5.9,7.4 -13.1,10.6 -26.8,9.8 0,0 -0.1,0 -0.1,0 0,0 0.1,0 0.1,0 20.1,-9 30.2,-17.7 39.1,-32 2.1,-3.4 4.2,-7.1 6.3,-11.2 -17.6,18.1 -38,23.2 -59.5,19.3 L 109,380 c -0.5,1.4 -1,2.7 -1.5,4.1 z"
					id="path7298" style={{fill: 'url(#linearGradient7400)'}}/>
				<linearGradient x1="-8238.3281" y1="-818.15222" x2="-7698.647" y2="-818.15222" id="linearGradient7300"
				                gradientUnits="userSpaceOnUse"
				                gradientTransform="matrix(0.4226,-0.9063,0.9063,0.4226,4226.9761,-6584.5938)">
					<stop id="stop7302" style={{stopColor: '#9e2064', stopOpacity: '1'}} offset="0.3233"/>
					<stop id="stop7304" style={{stopColor: '#c92037', stopOpacity: '1'}} offset="0.63020003"/>
					<stop id="stop7306" style={{stopColor: '#cd2335', stopOpacity: '1'}} offset="0.75139999"/>
					<stop id="stop7308" style={{stopColor: '#e97826', stopOpacity: '1'}} offset="1"/>
				</linearGradient>
				<path
					d="m 115,348 c 3.5,-9 7.1,-18.1 10.7,-27.3 3.5,-8.8 7.1,-17.6 10.8,-26.5 3.7,-8.9 7.5,-17.8 11.3,-26.7 3.9,-9.1 7.9,-18.1 12,-27.1 4,-8.9 8.2,-17.8 12.3,-26.6 1.5,-3.2 3,-6.3 4.6,-9.5 2.6,-5.4 5.3,-10.8 8,-16.2 0.1,-0.3 0.3,-0.6 0.4,-0.9 L 165.4,148 c -0.3,0.5 -0.6,1.1 -1,1.6 -4.6,7.6 -9.3,15.3 -13.8,23.2 -4.6,8 -9.1,16.1 -13.5,24.4 -3.7,7 -7.3,14 -10.9,21.1 -0.7,1.4 -1.4,2.9 -2.1,4.3 -4.3,8.9 -8.3,17.6 -11.8,25.9 -4,9.4 -7.5,18.4 -10.6,26.9 -2,5.6 -3.9,11 -5.6,16.2 -1.4,4.4 -2.7,8.9 -4,13.3 -3,10.4 -5.5,20.8 -7.6,31.2 l 20,39.5 c 2.6,-7.1 5.4,-14.2 8.1,-21.5 0.8,-2 1.6,-4 2.4,-6.1 z"
					id="path7310" style={{fill: 'url(#linearGradient7402)'}}/>
				<linearGradient x1="-8198.9678" y1="-810.85059" x2="-7915.3501" y2="-810.85059" id="linearGradient7312"
				                gradientUnits="userSpaceOnUse"
				                gradientTransform="matrix(0.4226,-0.9063,0.9063,0.4226,4226.9761,-6584.5938)">
					<stop id="stop7314" style={{stopColor: '#282662', stopOpacity: '1'}} offset="0"/>
					<stop id="stop7316" style={{stopColor: '#662e8d', stopOpacity: '1'}} offset="0.0954839"/>
					<stop id="stop7318" style={{stopColor: '#9f2064', stopOpacity: '1'}} offset="0.78820002"/>
					<stop id="stop7320" style={{stopColor: '#cd2032', stopOpacity: '1'}} offset="0.94870001"/>
				</linearGradient>
				<path
					d="m 84.2,337.5 c -2.5,12.6 -4.3,25.2 -5.2,37.8 0,0.4 -0.1,0.9 -0.1,1.3 -6.2,-10 -23,-19.8 -22.9,-19.7 12,17.4 21.1,34.6 22.4,51.5 -6.4,1.3 -15.2,-0.6 -25.3,-4.3 10.6,9.7 18.5,12.4 21.6,13.1 -9.7,0.6 -19.8,7.3 -30,15 14.9,-6.1 27,-8.5 35.6,-6.5 -13.7,38.7 -27.4,81.5 -41.1,126.9 4.2,-1.2 6.7,-4.1 8.1,-7.9 2.4,-8.2 18.7,-62.2 44.1,-133.1 0.7,-2 1.5,-4 2.2,-6.1 0.2,-0.6 0.4,-1.1 0.6,-1.7 2.7,-7.4 5.5,-15 8.4,-22.8 0.7,-1.8 1.3,-3.5 2,-5.3 0,0 0,-0.1 0,-0.1 l -20,-39.5 c -0.2,0.5 -0.3,0.9 -0.4,1.4 z"
					id="path7322" style={{fill: 'url(#linearGradient7404)'}}/>
				<linearGradient x1="-8238.3281" y1="-762.29712" x2="-7698.647" y2="-762.29712" id="linearGradient7324"
				                gradientUnits="userSpaceOnUse"
				                gradientTransform="matrix(0.4226,-0.9063,0.9063,0.4226,4226.9761,-6584.5938)">
					<stop id="stop7326" style={{stopColor: '#9e2064', stopOpacity: '1'}} offset="0.3233"/>
					<stop id="stop7328" style={{stopColor: '#c92037', stopOpacity: '1'}} offset="0.63020003"/>
					<stop id="stop7330" style={{stopColor: '#cd2335', stopOpacity: '1'}} offset="0.75139999"/>
					<stop id="stop7332" style={{stopColor: '#e97826', stopOpacity: '1'}} offset="1"/>
				</linearGradient>
				<path
					d="m 188.4,190.6 c -0.6,1.2 -1.1,2.3 -1.7,3.5 -1.7,3.6 -3.5,7.2 -5.2,10.9 -1.9,4 -3.8,8.1 -5.8,12.3 -1,2.1 -2,4.2 -3,6.4 -3,6.5 -6,13.2 -9.1,20.1 -3.8,8.5 -7.6,17.3 -11.5,26.5 -3.7,8.7 -7.5,17.8 -11.3,27.1 -3.6,8.9 -7.3,18 -11,27.5 -3.3,8.4 -6.6,17.1 -10,26 -0.2,0.4 -0.3,0.9 -0.5,1.3 -3.3,8.8 -6.7,17.9 -10.1,27.2 -0.1,0.2 -0.2,0.4 -0.2,0.6 l 16.1,-1.8 c -0.3,-0.1 -0.6,-0.1 -1,-0.2 19.3,-2.4 44.9,-16.8 61.4,-34.6 7.6,-8.2 14.5,-17.8 20.9,-29.1 4.8,-8.4 9.2,-17.7 13.5,-28.1 3.7,-9 7.3,-18.8 10.7,-29.4 -4.4,2.3 -9.5,4 -15.1,5.2 -1,0.2 -2,0.4 -3,0.6 -1,0.2 -2,0.3 -3.1,0.5 l 0,0 0,0 c 0,0 0,0 0,0 18,-6.9 29.3,-20.2 37.5,-36.6 -4.7,3.2 -12.4,7.4 -21.6,9.5 -1.2,0.3 -2.5,0.5 -3.8,0.7 -0.3,0 -0.6,0.1 -1,0.1 l 0,0 0,0 c 0,0 0,0 0,0 0,0 0,0 0,0 l 0,0 c 6.2,-2.6 11.5,-5.5 16.1,-9 1,-0.7 1.9,-1.5 2.8,-2.3 1.4,-1.2 2.7,-2.5 4,-3.8 0.8,-0.9 1.6,-1.7 2.4,-2.6 1.8,-2.1 3.5,-4.4 5,-6.9 0.5,-0.8 1,-1.5 1.4,-2.3 0.6,-1.2 1.2,-2.3 1.7,-3.4 2.5,-5 4.5,-9.5 6.1,-13.5 0.8,-2 1.5,-3.8 2.1,-5.5 0.2,-0.7 0.5,-1.3 0.7,-2 0.6,-1.9 1.2,-3.6 1.6,-5.1 0.6,-2.2 1,-4 1.2,-5.3 l 0,0 0,0 c -0.6,0.5 -1.3,1 -2.1,1.4 -5.4,3.2 -14.7,6.2 -22.2,7.6 l 14.8,-1.6 -14.8,1.6 c -0.1,0 -0.2,0 -0.3,0.1 -0.7,0.1 -1.5,0.2 -2.3,0.4 0.1,-0.1 0.3,-0.1 0.4,-0.2 l -50.6,5.5 c 0.1,0.4 0,0.6 -0.1,0.7 z"
					id="path7334" style={{fill: 'url(#linearGradient7406)'}}/>
				<linearGradient x1="-8271.8057" y1="-765.07068" x2="-7732.125" y2="-765.07068" id="linearGradient7336"
				                gradientUnits="userSpaceOnUse"
				                gradientTransform="matrix(0.4226,-0.9063,0.9063,0.4226,4226.9761,-6584.5938)">
					<stop id="stop7338" style={{stopColor: '#9e2064', stopOpacity: '1'}} offset="0.3233"/>
					<stop id="stop7340" style={{stopColor: '#c92037', stopOpacity: '1'}} offset="0.63020003"/>
					<stop id="stop7342" style={{stopColor: '#cd2335', stopOpacity: '1'}} offset="0.75139999"/>
					<stop id="stop7344" style={{stopColor: '#e97826', stopOpacity: '1'}} offset="1"/>
				</linearGradient>
				<path
					d="m 245.4,88.4 c -4.5,6.9 -9.4,14.8 -14.7,23.6 -0.3,0.5 -0.6,0.9 -0.8,1.4 -4.6,7.7 -9.4,16.1 -14.5,25.4 -4.4,8 -9,16.5 -13.8,25.8 -4.2,8 -8.4,16.5 -12.9,25.5 l 50.6,-5.5 c 14.7,-6.8 21.3,-12.9 27.7,-21.8 1.7,-2.4 3.4,-5 5.1,-7.7 5.2,-8.1 10.3,-17 14.8,-25.9 4.4,-8.6 8.3,-17.1 11.2,-24.7 1.9,-4.9 3.4,-9.4 4.5,-13.4 0.9,-3.5 1.6,-6.8 2.2,-10 -19.6,3.3 -43.7,6.5 -59.4,7.3 z"
					id="path7346" style={{fill: 'url(#linearGradient7408)'}}/>
				<path d="m 212.7,262.8 c -1,0.2 -2,0.3 -3.1,0.5 l 0,0 c 1,-0.2 2,-0.4 3.1,-0.5 z" id="path7348"
				      style={{fill: '#be202e'}}/>
				<path d="m 212.7,262.8 c -1,0.2 -2,0.3 -3.1,0.5 l 0,0 c 1,-0.2 2,-0.4 3.1,-0.5 z" id="path7350"
				      style={{opacity: '0.35', fill: '#be202e'}}/>
				<linearGradient x1="-8238.3281" y1="-745.68481" x2="-7698.647" y2="-745.68481" id="linearGradient7352"
				                gradientUnits="userSpaceOnUse"
				                gradientTransform="matrix(0.4226,-0.9063,0.9063,0.4226,4226.9761,-6584.5938)">
					<stop id="stop7354" style={{stopColor: '#9e2064', stopOpacity: '1'}} offset="0.3233"/>
					<stop id="stop7356" style={{stopColor: '#c92037', stopOpacity: '1'}} offset="0.63020003"/>
					<stop id="stop7358" style={{stopColor: '#cd2335', stopOpacity: '1'}} offset="0.75139999"/>
					<stop id="stop7360" style={{stopColor: '#e97826', stopOpacity: '1'}} offset="1"/>
				</linearGradient>
				<path d="m 212.7,262.8 c -1,0.2 -2,0.3 -3.1,0.5 l 0,0 c 1,-0.2 2,-0.4 3.1,-0.5 z" id="path7362"
				      style={{fill: 'url(#linearGradient7410)'}}/>
				<path d="m 220.7,236.9 c 0.3,0 0.6,-0.1 1,-0.1 -0.3,0 -0.6,0.1 -1,0.1 l 0,0 z" id="path7364"
				      style={{fill: '#be202e'}}/>
				<path d="m 220.7,236.9 c 0.3,0 0.6,-0.1 1,-0.1 -0.3,0 -0.6,0.1 -1,0.1 l 0,0 z" id="path7366"
				      style={{opacity: '0.35', fill: '#be202e'}}/>
				<linearGradient x1="-8238.3281" y1="-747.58557" x2="-7698.647" y2="-747.58557" id="linearGradient7368"
				                gradientUnits="userSpaceOnUse"
				                gradientTransform="matrix(0.4226,-0.9063,0.9063,0.4226,4226.9761,-6584.5938)">
					<stop id="stop7370" style={{stopColor: '#9e2064', stopOpacity: '1'}} offset="0.3233"/>
					<stop id="stop7372" style={{stopColor: '#c92037', stopOpacity: '1'}} offset="0.63020003"/>
					<stop id="stop7374" style={{stopColor: '#cd2335', stopOpacity: '1'}} offset="0.75139999"/>
					<stop id="stop7376" style={{stopColor: '#e97826', stopOpacity: '1'}} offset="1"/>
				</linearGradient>
				<path d="m 220.7,236.9 c 0.3,0 0.6,-0.1 1,-0.1 -0.3,0 -0.6,0.1 -1,0.1 l 0,0 z" id="path7378"
				      style={{fill: 'url(#linearGradient7412)'}}/>
				<path d="m 220.8,236.9 c 0,0 0,0 0,0 l 0,0 0,0 0,0 c 0,0 0,0 0,0 z" id="path7380" style={{fill: '#be202e'}}/>
				<path d="m 220.8,236.9 c 0,0 0,0 0,0 l 0,0 0,0 0,0 c 0,0 0,0 0,0 z" id="path7382"
				      style={{opacity: '0.35', fill: '#be202e'}}/>
				<linearGradient x1="-7935.1431" y1="-747.9668" x2="-7815.856" y2="-747.9668" id="linearGradient7384"
				                gradientUnits="userSpaceOnUse"
				                gradientTransform="matrix(0.4226,-0.9063,0.9063,0.4226,4226.9761,-6584.5938)">
					<stop id="stop7386" style={{stopColor: '#9e2064', stopOpacity: '1'}} offset="0.3233"/>
					<stop id="stop7388" style={{stopColor: '#c92037', stopOpacity: '1'}} offset="0.63020003"/>
					<stop id="stop7390" style={{stopColor: '#cd2335', stopOpacity: '1'}} offset="0.75139999"/>
					<stop id="stop7392" style={{stopColor: '#e97826', stopOpacity: '1'}} offset="1"/>
				</linearGradient>
				<path d="m 220.8,236.9 c 0,0 0,0 0,0 l 0,0 0,0 0,0 c 0,0 0,0 0,0 z" id="path7394"
				      style={{fill: 'url(#linearGradient7414)'}}/>
			</g>
			<g
				style={{
					fontStyle: 'italic',
					fontVariant: 'normal',
					fontWeight: 'bold',
					fontStretch: 'normal',
					fontSize: '100px',
					lineHeight: '125%',
					fontFamily: '\'Alte Haas Grotesk\'',
					letterSpacing: '0px',
					wordSpacing: '0px',
					fill: '#FFFFFF',
					fillOpacity: '1',
					stroke: 'none'
				}}
				id="text5492">
				<path
					d="m 23.541406,2.7166473 13.1,0 q 1.6,0 3.2,0 1.7,0 2.4,0.7 0.6,0.5 0.7,1.5 0.1,0.9 0.3,1.8 0.2,1.6 0.4,3.2999997 0.3,1.6 0.5,3.3 1.1,6.3 1.8,12.8 0.8,6.5 1.9,12.9 0.4,2 0.6,4.1 0.2,2.1 0.6,4.1 0.1,0.5 0.2,1 0.1,0.5 0.5,0.8 0.2,0.1 0.3,0.2 0.2,0.1 0.5,-0.1 0.8,-0.2 1.3,-1.2 0.5,-1 1,-1.8 1.2,-2.3 2.3,-4.5 1.1,-2.3 2.4,-4.6 3.2,-6.1 6.4,-12.2 3.3,-6.2 6.5,-12.4 0.8,-1.6 1.6,-3.0999997 0.9,-1.6 1.7,-3.2 0.4,-0.8 0.9,-1.6 0.5,-0.8 1.4,-1.3 0.7,-0.5 1.6,-0.5 1,0 2,0 l 6.5,0 6.9,0 q 0.9,0 1.8,0 1,0 1.4,0.4 1,0.6 0.6,2.3 -0.3,1.6 -0.6,3.3 l -3,14.9999997 -7.5,37.2 -1.7,8.7 q -0.2,1.1 -0.5,2.2 -0.3,1 -1,1.5 -0.7,0.5 -1.6,0.6 -0.9,0 -2,0 l -4.8,0 -2.7,0 q -0.7,-0.2 -1.3,-0.3 -0.5,-0.1 -0.8,-0.7 -0.3,-0.5 -0.2,-1.3 0.2,-0.8 0.4,-1.7 l 1,-5.1 5.2,-25.7 q 0.2,-1.4 0.4,-2.6 0.3,-1.3 0.5,-2.6 0.2,-0.8 0.4,-1.6 0.2,-0.9 0.2,-1.7 -0.1,-0.7 0,-1.5 0.2,-0.8 -0.3,-1 -0.3,-0.1 -0.5,0.1 -0.2,0.2 -0.3,0.3 -0.5,0.4 -0.9,1 -0.3,0.5 -0.6,1 -0.9,1.5 -1.8,3.1 -0.8,1.6 -1.8,3.2 -0.3,0.6 -0.6,1.2 -0.2,0.6 -0.6,1.2 -0.8,1.3 -1.5,2.6 -0.6,1.3 -1.4,2.6 -0.2,0.3 -0.3,0.7 -0.1,0.3 -0.3,0.6 -0.6,0.9 -1.1,1.9 -0.4,1 -1.1,2 -0.6,0.9 -1.1,1.9 -0.4,1 -1,2 -1.8,2.9 -3.3,5.9 -1.5,2.9 -3.1,5.8 -0.3,0.3 -0.4,0.6 0,0.3 -0.3,0.6 -0.7,1.1 -1.3,2.3 -0.5,1.1 -1.2,2.2 -0.4,0.7 -0.8,1.3 -0.4,0.6 -0.9,1 -0.6,0.4 -1.1,0.5 -0.5,0 -1.3,0.2 l -2.3,0 q -0.7,0 -1.7,0.1 -0.9,0 -1.9,0 -0.9,0 -1.7,-0.1 -0.8,-0.1 -1.1,-0.4 -0.7,-0.5 -0.9,-1.1 -0.1,-0.7 -0.4,-1.6 -0.2,-1.2 -0.3,-2.4 -0.1,-1.3 -0.4,-2.5 l -0.1,-0.9 q -0.3,-1.2 -0.4,-2.5 -0.1,-1.4 -0.4,-2.6 0,-0.3 0,-0.5 0,-0.3 -0.1,-0.6 -0.3,-0.9 -0.4,-1.9 -0.1,-1 -0.3,-2 0,-0.2 0,-0.5 0,-0.3 -0.1,-0.5 -0.2,-1 -0.3,-2 0,-1 -0.3,-2 -0.4,-2 -0.7,-4.2 -0.2,-2.2 -0.6,-4.3 -0.4,-2.5 -0.7,-5.1 -0.2,-2.6 -0.9,-5 -0.2,-1.4 -0.6,-2.3 -0.2,-0.2 -0.4,-0.3 -0.1,-0.2 -0.4,0 -0.6,0.3 -0.8,1 -0.1,0.7 -0.4,1.4 -0.4,0.7 -0.5,1.5 -0.1,0.7 -0.2,1.5 -0.2,1.1 -0.5,2.2 -0.2,1.1 -0.5,2.2 l -5.3,26.6 -1,4.9 q -0.2,0.8 -0.4,1.6 -0.1,0.8 -0.6,1.3 -0.5,0.7 -1.7,0.9 -0.7,0.2 -1.5,0.2 -0.8,-0.1 -1.6,-0.1 l -5.2,0 q -1.1000002,0 -2.0000002,0 -0.9,-0.1 -1.4,-0.6 -0.5,-0.5 -0.4,-1.5 0.2,-1.1 0.4,-2.2 l 1.7,-8.8 7.5000002,-37.2 2.8,-13.9999997 q 0.1,-0.6 0.2,-1.4 0.2,-0.9 0.4,-1.7 0.2,-0.8 0.4,-1.5 0.3,-0.8 0.5,-1.2 0.6,-0.7 1.8,-1 0.3,-0.1 0.4,0 0.2,0 0.5,-0.1 z"
					id="path4317"/>
				<path
					d="m 143.06641,70.016647 q 0,1.1 -0.2,2.2 -0.2,1.1 -1.3,1.5 -0.7,0.3 -1.5,0.3 -0.8,0 -1.6,0 l -5.4,0 q -0.9,0 -1.8,0 -0.8,-0.1 -1.2,-0.5 -0.6,-0.4 -0.8,-1.1 -0.2,-0.8 -0.7,-1.3 -0.2,-0.2 -0.5,-0.3 -0.2,-0.2 -0.7,-0.1 -0.6,0.2 -1.1,0.5 -0.5,0.3 -1,0.5 -0.6,0.4 -1.3,0.7 -0.6,0.3 -1.3,0.6 -1.4,0.6 -2.9,1 -1.5,0.3 -3,0.7 -0.8,0.2 -1.5,0.2 -0.6,0.1 -1.3,0.2 -0.3,0 -0.6,0 -0.3,0.1 -0.6,0.1 l -1.1,0 q -1.1,0.2 -2,0 l -0.9,0 q -0.7,-0.2 -1.4,-0.2 -0.6,0.1 -1.2,-0.1 -0.9,-0.2 -1.8,-0.4 -0.9,-0.1 -1.6,-0.5 -2.7,-1.1 -4.400004,-2.8 -1.7,-1.8 -2.3,-4.7 -0.2,-0.7 -0.3,-1.5 0,-0.8 -0.1,-1.7 -0.1,-0.5 0,-1 0.2,-0.5 0.2,-1 0,-0.3 0.1,-1.2 0.2,-1 0.4,-1.4 0.4,-1 0.5,-1.7 0.5,-1.1 1,-2.2 0.6,-1.2 1.3,-2.1 2.200004,-2.9 4.700004,-4.4 2.5,-1.5 6.2,-2.6 1.4,-0.5 2.8,-0.7 1.4,-0.2 2.9,-0.5 0.8,-0.2 1.7,-0.2 1,-0.1 1.9,-0.3 0.7,-0.2 1.4,-0.1 0.7,0 1.6,-0.2 0.7,-0.2 1.4,-0.2 0.7,0 1.5,-0.2 2.2,-0.5 4,-0.8 1.9,-0.4 3.6,-1.8 1,-0.9 1.6,-2 0.1,-0.3 0.1,-0.5 0,-0.2 0.1,-0.4 0.2,-0.2 0.2,-0.6 0.1,-0.4 0.2,-0.6 0,-0.4 0,-0.8 0,-0.4 0,-0.7 -0.4,-3 -3.4,-4.1 -0.8,-0.3 -2.1,-0.4 -1.2,-0.2 -2.5,-0.1 -1.3,0 -2.6,0.2 -1.2,0.2 -2.1,0.5 -0.7,0.2 -1.3,0.6 -0.6,0.3 -1.2,0.7 -0.6,0.4 -1.3,1.1 -0.7,0.7 -1,1.3 -0.7,1 -1.2,1.9 -0.5,0.9 -1.7,1.2 -0.8,0.2 -1.7,0.2 -0.9,0 -1.8,0 l -3.8,0 q -0.5,0 -1.1,0.1 -0.5,0 -0.8,-0.1 l -0.9,0 q -0.2,-0.1 -0.5,-0.1 -0.3,0 -0.5,-0.2 -0.7,-0.2 -0.8,-1.3 0,-0.5 0.2,-1 0.2,-0.5 0.4,-0.9 0.5,-1.1 1,-2 0.6,-1 1.2,-1.8 0.4,-0.5 0.8,-1 0.4,-0.5 0.8,-1 1,-1.1 2.4,-2.1 0.3,-0.1 0.7,-0.5 0.6,-0.4 1,-0.7 0.5,-0.3 1.1,-0.6 1.9,-1.1 3.9,-1.7 2.1,-0.7 4.2,-1.3 1.3,-0.3 2.6,-0.4 1.3,-0.1 2.7,-0.4 0.4,-0.1 1.2,0 0.8,0.1 1.1,-0.1 4.1,-0.1 7.7,0.3 3.7,0.4 6.5,1.5 2.9,1.1 4.7,3 1.9,1.8 2.5,4.7 0.3,1.7 0,3.9 -0.3,2.2 -0.8,4.5 l -4.5,22.3 q -0.3,1.9 -0.7,3.9 -0.4,1.9 -0.3,3.5 0,0.3 -0.1,0.7 0,0.3 0,0.6 z m -11.6,-15.4 q 0.2,-0.5 0.3,-1.1 0.1,-0.7 0.1,-1.2 0,-0.6 0.1,-1.1 0.1,-0.5 -0.3,-0.8 -0.4,-0.4 -1.4,-0.4 -0.4,0.1 -0.7,0.2 -0.3,0 -0.8,0.1 -0.7,0.2 -1.5,0.3 -0.8,0.1 -1.7,0.3 -0.3,0.1 -0.9,0.1 -1.4,0.3 -2.7,0.4 -1.3,0.1 -2.6,0.5 -0.8,0.2 -1.6,0.4 -0.7,0.1 -1.4,0.4 -2.3,0.9 -4.1,2.7 -1.8,1.8 -2.1,5 -0.1,1.7 0.6,2.8 0.4,1.1 1.7,1.8 1.3,0.6 2.9,0.9 1.6,0.3 3.4,0.2 1.9,-0.2 3.6,-0.7 2.8,-0.8 4.6,-2.5 1.9,-1.8 3.2,-4.4 0.3,-0.7 0.5,-1.4 0.2,-0.8 0.6,-1.6 l 0.2,-0.9 z"
					id="path4319"/>
				<path
					d="m 161.28828,22.416647 7.3,0 q 1.1,0 2.1,0.1 1,0 1.6,0.4 1,0.7 1,2.6 0.1,1.8 0.4,3.2 0.4,3.3 0.7,6.8 0.3,3.4 0.7,6.8 0.4,2.4 0.6,4.9 0.2,2.5 0.6,4.8 0.1,0.9 0.2,1.9 0.2,1 1.3,1 0.3,-0.2 0.4,-0.2 0.1,-0.1 0.3,-0.3 0.4,-0.5 0.7,-1 0.3,-0.5 0.6,-1.1 0.8,-1.1 1.2,-2.3 0.5,-1.2 1.2,-2.3 2.2,-4.2 4.3,-8.4 2.1,-4.3 4.3,-8.5 0.8,-1.2 1.3,-2.4 0.6,-1.3 1.2,-2.4 0.4,-0.8 0.8,-1.6 0.5,-0.8 1.2,-1.3 0.3,-0.2 1.4,-0.6 0.6,-0.2 1.3,-0.1 0.7,0 1.3,0 l 4.9,0 q 1.1,0 2,0.1 1,0 1.4,0.5 0.5,0.5 0.1,1.5 -0.3,0.9 -0.6,1.5 -0.8,1.4 -1.6,3 -0.8,1.5 -1.6,2.9 -0.4,0.7 -0.7,1.4 -0.3,0.6 -0.6,1.2 -0.7,1.1 -1.3,2.2 -0.6,1.1 -1.2,2.2 -0.1,0.3 -0.3,0.7 -0.1,0.3 -0.3,0.6 -0.9,1.5 -1.7,3.1 -0.8,1.5 -1.6,3 -1.7,3 -3.3,6.2 -1.6,3.1 -3.4,6.1 -0.8,1.4 -1.5,2.8 -0.6,1.3 -1.4,2.7 -0.3,0.5 -0.5,0.9 -0.2,0.3 -0.5,0.8 -0.6,1.1 -1.2,2.3 -0.5,1.1 -1.2,2.2 -0.7,1.1 -1.3,2.1 -0.6,0.9 -1.7,1.3 -0.9,0.3 -1.8,0.3 -0.9,-0.1 -1.8,-0.1 l -6.5,0 q -1.1,0 -2.2,0 -1,0 -1.7,-0.4 -0.6,-0.5 -0.8,-1.2 -0.1,-0.8 -0.2,-1.7 -0.3,-1.2 -0.5,-2.5 -0.1,-1.3 -0.3,-2.5 -0.1,-0.4 -0.1,-0.7 0,-0.4 -0.1,-0.9 -0.3,-1.2 -0.4,-2.5 -0.1,-1.3 -0.4,-2.6 -0.1,-0.5 -0.1,-0.9 0,-0.5 -0.1,-1 -0.2,-0.9 -0.3,-1.8 -0.1,-1 -0.3,-1.9 -0.1,-0.3 -0.1,-0.6 0.1,-0.4 0,-0.7 -0.2,-0.9 -0.3,-1.8 -0.1,-0.9 -0.3,-1.9 -0.4,-2.3 -0.7,-4.7 -0.3,-2.5 -0.6,-4.9 -0.6,-2.7 -0.9,-5.4 -0.2,-2.8 -0.7,-5.5 l -0.3,-2.7 q -0.1,-0.3 -0.1,-0.7 0.1,-0.5 0.4,-0.9 0.4,-0.7 1.6,-1 0.5,0 0.7,-0.1 z"
					style={{fill: 'none', stroke: 'none'}} id="path4321"/>
				<path
					d="m 259.04141,47.716647 q 0,0.8 -0.4,1.8 -0.4,1 -1,1.3 -0.5,0.4 -1.5,0.6 -1,0.1 -2.2,0.2 -1.1,0 -2.3,0 -1.1,-0.1 -2,-0.1 l -24.4,0 q -0.7,0 -1.4,0 -0.6,0 -1.1,0.2 -0.9,0.4 -1.2,0.8 -0.2,0.2 -0.6,0.8 -0.3,0.5 -0.3,1 0.1,0.6 0,1.2 0,0.5 0.1,1.1 0.3,2.4 1.1,4 0.9,1.5 2.6,2.7 0.7,0.5 1.5,0.7 0.9,0.1 1.7,0.4 0.8,0.2 2.1,0.3 1.4,0.1 2.5,-0.1 l 0.9,0 q 1,-0.2 1.9,-0.4 0.9,-0.3 1.8,-0.6 1.1,-0.5 2.5,-1.3 1.4,-0.8 2.2,-1.6 0.6,-0.7 1.3,-1.3 0.7,-0.7 1.5,-1 1.1,-0.5 2.6,-0.4 1.6,0 2.9,0 0.6,0 1.2,0 0.7,-0.1 1.2,0.1 l 1,0 q 0.9,0.2 1.3,0.5 0.3,0.2 0.2,0.9 0,0.7 -0.3,1.2 -0.8,1.4 -1.7,2.5 -0.8,1.1 -1.8,2.2 -2.8,3.3 -6,5.3 -3.2,2 -7.7,3.4 -1.2,0.4 -2.3,0.5 -1.1,0.1 -2.4,0.4 -0.4,0.1 -0.9,0 -0.4,0 -0.8,0.1 l -1.1,0 q -0.6,0.2 -1.2,0.1 -0.6,0 -1.1,-0.1 -0.8,-0.1 -1.4,0 -0.6,0.1 -1.3,-0.1 -0.5,-0.2 -1.1,-0.2 -0.6,0 -1,-0.2 -1.1,-0.2 -2.2,-0.5 -1,-0.2 -1.8,-0.7 -1,-0.4 -1.9,-0.7 -0.9,-0.4 -1.6,-0.9 -2.8,-2 -4.8,-4.6 -1.9,-2.7 -2.8,-6.2 -0.3,-1.1 -0.4,-2.2 0,-1.2 -0.3,-2.4 0,-0.4 0,-0.7 0.1,-0.4 0.1,-0.8 -0.1,-1.2 0,-2.6 0.2,-1.4 0.4,-2.8 0.1,-0.5 0.1,-1.1 0.1,-0.6 0.3,-1.1 l 0.3,-1.2 0.8,-2.4 q 0.7,-1.7 1.3,-3.3 0.6,-1.6 1.5,-3 6.4,-10.4 17.6,-14.7 1.5,-0.6 3,-0.8 1.5,-0.3 3.2,-0.7 0.8,-0.1 1.5,-0.1 0.7,0 1.5,-0.1 5.1,-0.1 8.5,1.2 3.4,1.2 5.9,3.2 0.8,0.6 1.5,1.4 0.8,0.7 1.3,1.5 0.2,0.5 0.7,0.8 0.6,1.1 1,2.3 0.5,1.1 1.1,2.3 0.3,0.9 0.4,1.9 0.2,0.9 0.4,2 0.2,1.3 0.2,2.7 0.1,1.4 0.2,2.8 0,0.8 -0.3,1.8 -0.2,0.9 -0.1,1.7 l -0.2,1.1 z m -13.9,-5.9 q 0.9,-1 0.6,-2.4 -0.2,-1.5 -0.3,-2.2 -0.9,-2.7 -2.9,-4.1 -2,-1.5 -6.1,-1.6 -0.3,0.2 -0.7,0.1 -0.4,-0.1 -0.7,0 -0.6,0.2 -1.2,0.3 -0.6,0 -1.1,0.2 -4.7,1.4 -7.6,5.5 -0.3,0.4 -0.7,1.1 -0.4,0.6 -0.6,1.3 -0.2,0.6 -0.2,1.2 0,0.6 0.5,1 0.7,0.5 2.1,0.5 1.4,0 2.7,0 l 11.1,0 q 1.4,0 2.9,0 1.6,-0.1 2.2,-0.9 z"
					id="path4323"/>
				<path
					d="m 302.16328,21.116647 q 6,-0.2 9.6,1.7 3.7,1.9 5.2,5.6 0.5,1.1 0.6,2.4 0.2,1.2 0.3,2.5 0.1,0.8 0,1.5 -0.1,0.7 0,1.4 -0.2,0.6 -0.1,0.8 -0.1,1.4 -0.4,2.9 -0.3,1.5 -0.6,2.9 l -1.7,8.9 -3.3,16.2 q -0.4,1.9 -0.8,3.7 -0.4,1.7 -1.9,2.2 -0.6,0.2 -1.4,0.2 -0.8,0 -1.6,0 l -5.4,0 q -1.2,0 -2.1,-0.1 -0.9,-0.2 -1.3,-0.9 -0.3,-0.6 -0.2,-1.5 0.2,-1 0.4,-2.1 l 1.4,-7 3,-14.9 q 0.7,-3.7 1,-6.8 0.4,-3.2 -0.7,-5.4 -1,-2 -3.5,-2.8 -0.5,-0.2 -1.1,-0.2 -0.5,0 -1,-0.2 -0.5,-0.1 -1.3,0 -0.7,0 -1.1,0.1 -0.5,0.1 -0.8,0.1 -0.3,0 -0.6,0.1 -2.4,0.6 -4,1.6 -3.7,2.3 -5.2,6.7 -1.4,4.4 -2.5,9.9 l -2.5,12.5 -1.2,6.1 q -0.2,0.9 -0.4,1.8 -0.2,0.9 -0.6,1.5 -0.7,1.1 -1.9,1.3 -1.1,0.2 -2.7,0.2 l -5,0 q -1.1,0 -2.2,-0.1 -1.1,-0.1 -1.4,-0.7 -0.6,-0.9 -0.2,-2.6 0.4,-1.7 0.7,-3.2 l 2.7,-13.6 4.4,-22 1.1,-5.1 q 0.2,-1.1 0.4,-2 0.2,-0.9 0.9,-1.5 0.2,-0.3 0.7,-0.4 0.5,-0.2 1,-0.3 l 0.5,0 q 0.5,-0.1 1,-0.1 0.6,0 1.1,0 l 4.2,0 q 0.8,0 1.5,0.1 0.8,0 1.4,0.2 0.6,0.3 0.7,0.9 0.2,0.6 0.2,1.4 0,0.4 -0.1,0.7 -0.1,0.3 0,0.6 0.1,0.5 0.2,0.6 0.2,0.1 0.5,0.3 1,0.1 1.9,-0.7 0.9,-0.9 1.8,-1.4 3.1,-2 6.6,-3.2 1,-0.3 1.9,-0.4 1,-0.1 2.2,-0.3 0.3,-0.1 0.9,0 0.6,0 0.8,-0.1 z"
					id="path4325"/>
			</g>
			<g
				style={{
					fontStyle: 'italic',
					fontVariant: 'normal',
					fontWeight: 'bold',
					fontStretch: 'normal',
					fontSize: '20px',
					lineHeight: '125%',
					fontFamily: '\'Alte Haas Grotesk\'',
					letterSpacing: '0px',
					wordSpacing: '0px',
					fill: '#FFFFFF',
					fillOpacity: '1',
					stroke: 'none'
				}}
				id="text9112">
				<path
					d="m 326.92482,21.038048 q 0.1,0.08 0.1,0.34 0,0.26 -0.1,0.48 l -0.02,0.16 q -0.08,0.18 -0.18,0.3 -0.08,0.1 -0.26,0.16 -0.18,0.04 -0.5,0.04 -0.32,-0.02 -0.54,-0.02 l -0.3,0 q -0.1,0.04 -0.18,0.02 -0.08,-0.02 -0.16,0.02 -0.22,0.08 -0.38,0.38 -0.06,0.1 -0.08,0.24 -0.02,0.14 -0.04,0.28 l -0.96,4.72 q -0.02,0.1 -0.02,0.18 0,0.08 -0.04,0.16 l -0.04,0.16 q -0.02,0.06 -0.04,0.12 0,0.06 -0.06,0.1 -0.08,0.16 -0.26,0.22 -0.1,0.04 -0.24,0.04 -0.12,0 -0.28,0 -0.28,0 -0.62,0 -0.34,0 -0.46,-0.16 -0.06,-0.12 -0.04,-0.28 0.04,-0.16 0.08,-0.36 l 0.94,-4.72 q 0.02,-0.1 0.04,-0.2 0.04,-0.1 0.02,-0.18 l 0.04,-0.28 q 0.02,-0.32 -0.2,-0.4 -0.18,-0.1 -0.54,-0.08 -0.34,0.02 -0.6,0.02 -0.1,0 -0.2,0.02 -0.08,0 -0.14,-0.02 -0.08,-0.04 -0.14,-0.02 -0.06,0 -0.12,-0.02 -0.2,-0.1 -0.18,-0.32 0.02,-0.22 0.08,-0.52 0.02,-0.12 0.04,-0.22 0.04,-0.1 0.1,-0.2 0.06,-0.1 0.16,-0.14 0.1,-0.06 0.2,-0.1 0.06,-0.02 0.08,0 0.04,0 0.1,-0.02 l 5.34,0 q 0.18,0 0.34,0.02 0.16,0 0.26,0.08 z m 10.64,0.04 q 0.08,0.14 0.04,0.32 -0.02,0.18 -0.06,0.4 l -1.3,6.5 q -0.04,0.22 -0.1,0.4 -0.04,0.16 -0.14,0.28 -0.14,0.16 -0.44,0.16 -0.28,0 -0.56,0 -0.12,0 -0.26,0.02 -0.12,0 -0.2,-0.04 -0.18,-0.06 -0.22,-0.18 -0.02,-0.12 -0.02,-0.3 l 0.06,-0.34 q 0,-0.06 0.02,-0.14 0.02,-0.1 0.04,-0.18 l 0.52,-2.54 q 0.04,-0.24 0.08,-0.48 0.06,-0.24 0.06,-0.44 -0.02,-0.1 -0.02,-0.16 0,-0.08 -0.06,-0.12 -0.02,-0.02 -0.06,-0.02 -0.06,0.04 -0.14,0.08 -0.2,0.24 -0.36,0.54 -0.16,0.3 -0.34,0.58 -0.36,0.62 -0.7,1.26 -0.34,0.62 -0.7,1.22 -0.16,0.28 -0.34,0.64 -0.18,0.34 -0.42,0.5 -0.12,0.08 -0.28,0.1 -0.16,0 -0.34,0 l -0.3,0 q -0.1,-0.04 -0.18,-0.06 -0.08,-0.04 -0.14,-0.1 -0.06,-0.06 -0.08,-0.16 -0.02,-0.1 -0.04,-0.2 -0.06,-0.18 -0.08,-0.36 -0.02,-0.2 -0.06,-0.4 -0.12,-0.58 -0.2,-1.18 -0.08,-0.62 -0.2,-1.2 -0.06,-0.34 -0.12,-0.68 -0.04,-0.34 -0.22,-0.58 -0.04,0 -0.06,0.02 -0.02,0 -0.04,0 -0.1,0.08 -0.14,0.18 -0.06,0.1 -0.08,0.2 0,0.08 -0.04,0.18 l -0.06,0.34 q -0.04,0.08 -0.06,0.16 -0.02,0.08 -0.02,0.14 l -0.48,2.32 q -0.04,0.26 -0.12,0.64 -0.06,0.36 -0.18,0.52 -0.06,0.04 -0.12,0.1 -0.04,0.04 -0.1,0.06 -0.1,0.04 -0.24,0.06 -0.12,0 -0.28,0 -0.26,0 -0.52,0 -0.26,0 -0.4,-0.12 -0.1,-0.08 -0.1,-0.26 0.02,-0.18 0.06,-0.4 l 1.32,-6.6 q 0.04,-0.18 0.08,-0.34 0.06,-0.18 0.14,-0.28 0.1,-0.14 0.32,-0.18 0.06,-0.02 0.08,0 0.04,0 0.1,-0.02 l 1.32,0 q 0.22,0 0.42,0 0.2,0 0.3,0.1 0.16,0.12 0.18,0.38 0.04,0.26 0.1,0.48 0.1,0.56 0.2,1.14 0.1,0.56 0.2,1.14 0.08,0.3 0.12,0.62 0.06,0.32 0.12,0.62 0.04,0.12 0.06,0.26 0.04,0.12 0.16,0.16 0.1,0.04 0.18,-0.04 0.1,-0.08 0.14,-0.14 0.2,-0.22 0.32,-0.46 0.14,-0.26 0.28,-0.5 0.42,-0.66 0.78,-1.34 0.38,-0.7 0.8,-1.36 0.16,-0.28 0.32,-0.58 0.18,-0.32 0.48,-0.44 0.14,-0.04 0.28,-0.04 0.16,0 0.32,0 l 0.88,0 q 0.12,0 0.24,0 0.12,-0.02 0.22,0 l 0.1,0 q 0.08,0.04 0.16,0.06 0.1,0.02 0.12,0.08 z"
					id="path4328"/>
			</g>
			<g transform="matrix(0.13272567,0.01947468,-0.01947468,0.13272567,170.19741,12.570146)" id="g4701">
				<linearGradient x1="-7708.7969" y1="-803.36011" x2="-7633.1528" y2="-714.90741" id="SVGID_1_"
				                gradientUnits="userSpaceOnUse"
				                gradientTransform="matrix(0.4226,-0.9063,0.9063,0.4226,4226.9761,-6584.5938)">
					<stop id="stop4704" style={{stopColor: '#f69923', stopOpacity: '1'}} offset="0"/>
					<stop id="stop4706" style={{stopColor: '#f79a23', stopOpacity: '1'}} offset="0.3123"/>
					<stop id="stop4708" style={{stopColor: '#e97826', stopOpacity: '1'}} offset="0.83829999"/>
				</linearGradient>
				<path
					d="m 267.1,19.6 c -8.4,5 -22.4,19 -39,39.3 l 15.3,28.9 c 10.7,-15.4 21.7,-29.2 32.7,-41 0.8,-0.9 1.3,-1.4 1.3,-1.4 -0.4,0.5 -0.9,0.9 -1.3,1.4 -3.6,3.9 -14.4,16.5 -30.7,41.6 15.7,-0.8 39.8,-4 59.5,-7.4 5.9,-32.8 -5.7,-47.8 -5.7,-47.8 0,0 -14.8,-23.9 -32.1,-13.6 z"
					id="path4710" style={{fill: 'url(#linearGradient5344)'}}/>
				<path
					d="m 241.1,184.4 c 0.1,0 0.2,0 0.3,-0.1 l -2.2,0.2 c -0.1,0.1 -0.3,0.1 -0.4,0.2 0.8,-0.1 1.6,-0.2 2.3,-0.3 z"
					id="path4712" style={{fill: 'none'}}/>
				<path d="m 225.5,236.1 c -1.2,0.3 -2.5,0.5 -3.8,0.7 1.3,-0.2 2.6,-0.4 3.8,-0.7 z" id="path4714"
				      style={{fill: 'none'}}/>
				<path
					d="m 119.3,352.2 c 0.2,-0.4 0.3,-0.9 0.5,-1.3 3.4,-8.9 6.7,-17.5 10,-26 3.7,-9.4 7.4,-18.6 11,-27.5 3.8,-9.3 7.6,-18.4 11.3,-27.1 3.9,-9.2 7.7,-18 11.5,-26.5 3.1,-6.9 6.1,-13.6 9.1,-20.1 1,-2.2 2,-4.3 3,-6.4 2,-4.2 3.9,-8.3 5.8,-12.3 1.8,-3.7 3.5,-7.3 5.2,-10.9 0.6,-1.2 1.2,-2.4 1.7,-3.5 0.1,-0.2 0.2,-0.4 0.3,-0.6 l -1.9,0.2 -1.5,-2.9 c -0.1,0.3 -0.3,0.6 -0.4,0.9 -2.7,5.3 -5.4,10.7 -8,16.2 -1.5,3.1 -3,6.3 -4.6,9.5 -4.2,8.8 -8.3,17.6 -12.3,26.6 -4.1,9 -8.1,18.1 -12,27.1 -3.9,8.9 -7.6,17.8 -11.3,26.7 -3.7,8.9 -7.3,17.7 -10.8,26.5 -3.7,9.2 -7.3,18.3 -10.7,27.3 -0.8,2 -1.6,4.1 -2.3,6.1 -2.8,7.3 -5.5,14.4 -8.1,21.5 l 2.4,4.7 2.1,-0.2 c 0.1,-0.2 0.2,-0.4 0.2,-0.6 3.1,-9.5 6.5,-18.6 9.8,-27.4 z"
					id="path4716" style={{fill: 'none'}}/>
				<path d="m 220.7,236.9 0,0 c 0,0 0,0 0,0 0,0 0,0 0,0 z" id="path4718" style={{fill: 'none'}}/>
				<path d="m 215.6,262.2 c -2,0.4 -4,0.7 -6,1 0,0 0,0 0,0 1,-0.1 2.1,-0.3 3.1,-0.5 1,-0.1 2,-0.3 2.9,-0.5 z"
				      id="path4720" style={{fill: '#be202e'}}/>
				<path d="m 215.6,262.2 c -2,0.4 -4,0.7 -6,1 0,0 0,0 0,0 1,-0.1 2.1,-0.3 3.1,-0.5 1,-0.1 2,-0.3 2.9,-0.5 z"
				      id="path4722" style={{opacity: '0.35', fill: '#be202e'}}/>
				<path
					d="m 220.8,236.9 c 0,0 0,0 0,0 -0.1,0 -0.1,0 0,0 0.3,0 0.6,-0.1 0.9,-0.1 1.3,-0.2 2.6,-0.4 3.8,-0.7 -1.5,0.3 -3.1,0.5 -4.7,0.8 l 0,0 0,0 z"
					id="path4724" style={{fill: '#be202e'}}/>
				<path
					d="m 220.8,236.9 c 0,0 0,0 0,0 -0.1,0 -0.1,0 0,0 0.3,0 0.6,-0.1 0.9,-0.1 1.3,-0.2 2.6,-0.4 3.8,-0.7 -1.5,0.3 -3.1,0.5 -4.7,0.8 l 0,0 0,0 z"
					id="path4726" style={{opacity: '0.35', fill: '#be202e'}}/>
				<linearGradient x1="-8268.6387" y1="-813.12323" x2="-7728.9585" y2="-813.12323" id="SVGID_2_"
				                gradientUnits="userSpaceOnUse"
				                gradientTransform="matrix(0.4226,-0.9063,0.9063,0.4226,4226.9761,-6584.5938)">
					<stop id="stop4729" style={{stopColor: '#9e2064', stopOpacity: '1'}} offset="0.3233"/>
					<stop id="stop4731" style={{stopColor: '#c92037', stopOpacity: '1'}} offset="0.63020003"/>
					<stop id="stop4733" style={{stopColor: '#cd2335', stopOpacity: '1'}} offset="0.75139999"/>
					<stop id="stop4735" style={{stopColor: '#e97826', stopOpacity: '1'}} offset="1"/>
				</linearGradient>
				<path
					d="m 198.2,162.4 c 4.7,-8.7 9.4,-17.2 14.1,-25.5 4.9,-8.6 9.9,-16.9 15,-25 0.3,-0.5 0.6,-1 0.9,-1.4 5,-7.9 10,-15.5 15.1,-22.8 L 228,58.9 c -1.1,1.4 -2.3,2.8 -3.5,4.3 -4.4,5.5 -9,11.4 -13.7,17.7 -5.3,7.1 -10.7,14.6 -16.3,22.5 -5.1,7.3 -10.3,15 -15.5,22.9 -4.4,6.8 -8.8,13.7 -13.2,20.8 -0.2,0.3 -0.3,0.5 -0.5,0.8 l 19.9,39.3 c 4.4,-8.3 8.7,-16.6 13,-24.8 z"
					id="path4737" style={{fill: 'url(#linearGradient5346)'}}/>
				<linearGradient x1="-8203.4922" y1="-758.99402" x2="-7881.895" y2="-758.99402" id="SVGID_3_"
				                gradientUnits="userSpaceOnUse"
				                gradientTransform="matrix(0.4226,-0.9063,0.9063,0.4226,4226.9761,-6584.5938)">
					<stop id="stop4740" style={{stopColor: '#282662', stopOpacity: '1'}} offset="0"/>
					<stop id="stop4742" style={{stopColor: '#662e8d', stopOpacity: '1'}} offset="0.0954839"/>
					<stop id="stop4744" style={{stopColor: '#9f2064', stopOpacity: '1'}} offset="0.78820002"/>
					<stop id="stop4746" style={{stopColor: '#cd2032', stopOpacity: '1'}} offset="0.94870001"/>
				</linearGradient>
				<path
					d="m 107.5,384.1 c -2.6,7.2 -5.3,14.6 -7.9,22.2 0,0.1 -0.1,0.2 -0.1,0.3 -0.4,1.1 -0.8,2.1 -1.1,3.2 -1.8,5.1 -3.3,9.7 -6.9,20.1 5.9,2.7 10.6,9.7 15,17.7 -0.5,-8.3 -3.9,-16.1 -10.4,-22.1 28.9,1.3 53.9,-6 66.7,-27.2 1.1,-1.9 2.2,-3.9 3.2,-6 -5.9,7.4 -13.1,10.6 -26.8,9.8 0,0 -0.1,0 -0.1,0 0,0 0.1,0 0.1,0 20.1,-9 30.2,-17.7 39.1,-32 2.1,-3.4 4.2,-7.1 6.3,-11.2 -17.6,18.1 -38,23.2 -59.5,19.3 L 109,380 c -0.5,1.4 -1,2.7 -1.5,4.1 z"
					id="path4748" style={{fill: 'url(#linearGradient5348)'}}/>
				<linearGradient x1="-8238.3281" y1="-818.15222" x2="-7698.647" y2="-818.15222" id="SVGID_4_"
				                gradientUnits="userSpaceOnUse"
				                gradientTransform="matrix(0.4226,-0.9063,0.9063,0.4226,4226.9761,-6584.5938)">
					<stop id="stop4751" style={{stopColor: '#9e2064', stopOpacity: '1'}} offset="0.3233"/>
					<stop id="stop4753" style={{stopColor: '#c92037', stopOpacity: '1'}} offset="0.63020003"/>
					<stop id="stop4755" style={{stopColor: '#cd2335', stopOpacity: '1'}} offset="0.75139999"/>
					<stop id="stop4757" style={{stopColor: '#e97826', stopOpacity: '1'}} offset="1"/>
				</linearGradient>
				<path
					d="m 115,348 c 3.5,-9 7.1,-18.1 10.7,-27.3 3.5,-8.8 7.1,-17.6 10.8,-26.5 3.7,-8.9 7.5,-17.8 11.3,-26.7 3.9,-9.1 7.9,-18.1 12,-27.1 4,-8.9 8.2,-17.8 12.3,-26.6 1.5,-3.2 3,-6.3 4.6,-9.5 2.6,-5.4 5.3,-10.8 8,-16.2 0.1,-0.3 0.3,-0.6 0.4,-0.9 L 165.4,148 c -0.3,0.5 -0.6,1.1 -1,1.6 -4.6,7.6 -9.3,15.3 -13.8,23.2 -4.6,8 -9.1,16.1 -13.5,24.4 -3.7,7 -7.3,14 -10.9,21.1 -0.7,1.4 -1.4,2.9 -2.1,4.3 -4.3,8.9 -8.3,17.6 -11.8,25.9 -4,9.4 -7.5,18.4 -10.6,26.9 -2,5.6 -3.9,11 -5.6,16.2 -1.4,4.4 -2.7,8.9 -4,13.3 -3,10.4 -5.5,20.8 -7.6,31.2 l 20,39.5 c 2.6,-7.1 5.4,-14.2 8.1,-21.5 0.8,-2 1.6,-4 2.4,-6.1 z"
					id="path4759" style={{fill: 'url(#linearGradient5350)'}}/>
				<linearGradient x1="-8198.9678" y1="-810.85059" x2="-7915.3501" y2="-810.85059" id="SVGID_5_"
				                gradientUnits="userSpaceOnUse"
				                gradientTransform="matrix(0.4226,-0.9063,0.9063,0.4226,4226.9761,-6584.5938)">
					<stop id="stop4762" style={{stopColor: '#282662', stopOpacity: '1'}} offset="0"/>
					<stop id="stop4764" style={{stopColor: '#662e8d', stopOpacity: '1'}} offset="0.0954839"/>
					<stop id="stop4766" style={{stopColor: '#9f2064', stopOpacity: '1'}} offset="0.78820002"/>
					<stop id="stop4768" style={{stopColor: '#cd2032', stopOpacity: '1'}} offset="0.94870001"/>
				</linearGradient>
				<path
					d="m 84.2,337.5 c -2.5,12.6 -4.3,25.2 -5.2,37.8 0,0.4 -0.1,0.9 -0.1,1.3 -6.2,-10 -23,-19.8 -22.9,-19.7 12,17.4 21.1,34.6 22.4,51.5 -6.4,1.3 -15.2,-0.6 -25.3,-4.3 10.6,9.7 18.5,12.4 21.6,13.1 -9.7,0.6 -19.8,7.3 -30,15 14.9,-6.1 27,-8.5 35.6,-6.5 -13.7,38.7 -27.4,81.5 -41.1,126.9 4.2,-1.2 6.7,-4.1 8.1,-7.9 2.4,-8.2 18.7,-62.2 44.1,-133.1 0.7,-2 1.5,-4 2.2,-6.1 0.2,-0.6 0.4,-1.1 0.6,-1.7 2.7,-7.4 5.5,-15 8.4,-22.8 0.7,-1.8 1.3,-3.5 2,-5.3 0,0 0,-0.1 0,-0.1 l -20,-39.5 c -0.2,0.5 -0.3,0.9 -0.4,1.4 z"
					id="path4770" style={{fill: 'url(#linearGradient5352)'}}/>
				<linearGradient x1="-8238.3281" y1="-762.29712" x2="-7698.647" y2="-762.29712" id="SVGID_6_"
				                gradientUnits="userSpaceOnUse"
				                gradientTransform="matrix(0.4226,-0.9063,0.9063,0.4226,4226.9761,-6584.5938)">
					<stop id="stop4773" style={{stopColor: '#9e2064', stopOpacity: '1'}} offset="0.3233"/>
					<stop id="stop4775" style={{stopColor: '#c92037', stopOpacity: '1'}} offset="0.63020003"/>
					<stop id="stop4777" style={{stopColor: '#cd2335', stopOpacity: '1'}} offset="0.75139999"/>
					<stop id="stop4779" style={{stopColor: '#e97826', stopOpacity: '1'}} offset="1"/>
				</linearGradient>
				<path
					d="m 188.4,190.6 c -0.6,1.2 -1.1,2.3 -1.7,3.5 -1.7,3.6 -3.5,7.2 -5.2,10.9 -1.9,4 -3.8,8.1 -5.8,12.3 -1,2.1 -2,4.2 -3,6.4 -3,6.5 -6,13.2 -9.1,20.1 -3.8,8.5 -7.6,17.3 -11.5,26.5 -3.7,8.7 -7.5,17.8 -11.3,27.1 -3.6,8.9 -7.3,18 -11,27.5 -3.3,8.4 -6.6,17.1 -10,26 -0.2,0.4 -0.3,0.9 -0.5,1.3 -3.3,8.8 -6.7,17.9 -10.1,27.2 -0.1,0.2 -0.2,0.4 -0.2,0.6 l 16.1,-1.8 c -0.3,-0.1 -0.6,-0.1 -1,-0.2 19.3,-2.4 44.9,-16.8 61.4,-34.6 7.6,-8.2 14.5,-17.8 20.9,-29.1 4.8,-8.4 9.2,-17.7 13.5,-28.1 3.7,-9 7.3,-18.8 10.7,-29.4 -4.4,2.3 -9.5,4 -15.1,5.2 -1,0.2 -2,0.4 -3,0.6 -1,0.2 -2,0.3 -3.1,0.5 l 0,0 0,0 c 0,0 0,0 0,0 18,-6.9 29.3,-20.2 37.5,-36.6 -4.7,3.2 -12.4,7.4 -21.6,9.5 -1.2,0.3 -2.5,0.5 -3.8,0.7 -0.3,0 -0.6,0.1 -1,0.1 l 0,0 0,0 c 0,0 0,0 0,0 0,0 0,0 0,0 l 0,0 c 6.2,-2.6 11.5,-5.5 16.1,-9 1,-0.7 1.9,-1.5 2.8,-2.3 1.4,-1.2 2.7,-2.5 4,-3.8 0.8,-0.9 1.6,-1.7 2.4,-2.6 1.8,-2.1 3.5,-4.4 5,-6.9 0.5,-0.8 1,-1.5 1.4,-2.3 0.6,-1.2 1.2,-2.3 1.7,-3.4 2.5,-5 4.5,-9.5 6.1,-13.5 0.8,-2 1.5,-3.8 2.1,-5.5 0.2,-0.7 0.5,-1.3 0.7,-2 0.6,-1.9 1.2,-3.6 1.6,-5.1 0.6,-2.2 1,-4 1.2,-5.3 l 0,0 0,0 c -0.6,0.5 -1.3,1 -2.1,1.4 -5.4,3.2 -14.7,6.2 -22.2,7.6 l 14.8,-1.6 -14.8,1.6 c -0.1,0 -0.2,0 -0.3,0.1 -0.7,0.1 -1.5,0.2 -2.3,0.4 0.1,-0.1 0.3,-0.1 0.4,-0.2 l -50.6,5.5 c 0.1,0.4 0,0.6 -0.1,0.7 z"
					id="path4781" style={{fill: 'url(#linearGradient5354)'}}/>
				<linearGradient x1="-8271.8057" y1="-765.07068" x2="-7732.125" y2="-765.07068" id="SVGID_7_"
				                gradientUnits="userSpaceOnUse"
				                gradientTransform="matrix(0.4226,-0.9063,0.9063,0.4226,4226.9761,-6584.5938)">
					<stop id="stop4784" style={{stopColor: '#9e2064', stopOpacity: '1'}} offset="0.3233"/>
					<stop id="stop4786" style={{stopColor: '#c92037', stopOpacity: '1'}} offset="0.63020003"/>
					<stop id="stop4788" style={{stopColor: '#cd2335', stopOpacity: '1'}} offset="0.75139999"/>
					<stop id="stop4790" style={{stopColor: '#e97826', stopOpacity: '1'}} offset="1"/>
				</linearGradient>
				<path
					d="m 245.4,88.4 c -4.5,6.9 -9.4,14.8 -14.7,23.6 -0.3,0.5 -0.6,0.9 -0.8,1.4 -4.6,7.7 -9.4,16.1 -14.5,25.4 -4.4,8 -9,16.5 -13.8,25.8 -4.2,8 -8.4,16.5 -12.9,25.5 l 50.6,-5.5 c 14.7,-6.8 21.3,-12.9 27.7,-21.8 1.7,-2.4 3.4,-5 5.1,-7.7 5.2,-8.1 10.3,-17 14.8,-25.9 4.4,-8.6 8.3,-17.1 11.2,-24.7 1.9,-4.9 3.4,-9.4 4.5,-13.4 0.9,-3.5 1.6,-6.8 2.2,-10 -19.6,3.3 -43.7,6.5 -59.4,7.3 z"
					id="path4792" style={{fill: 'url(#linearGradient5356)'}}/>
				<path d="m 212.7,262.8 c -1,0.2 -2,0.3 -3.1,0.5 l 0,0 c 1,-0.2 2,-0.4 3.1,-0.5 z" id="path4794"
				      style={{fill: '#be202e'}}/>
				<path d="m 212.7,262.8 c -1,0.2 -2,0.3 -3.1,0.5 l 0,0 c 1,-0.2 2,-0.4 3.1,-0.5 z" id="path4796"
				      style={{opacity: '0.35', fill: '#be202e'}}/>
				<linearGradient x1="-8238.3281" y1="-745.68481" x2="-7698.647" y2="-745.68481" id="SVGID_8_"
				                gradientUnits="userSpaceOnUse"
				                gradientTransform="matrix(0.4226,-0.9063,0.9063,0.4226,4226.9761,-6584.5938)">
					<stop id="stop4799" style={{stopColor: '#9e2064', stopOpacity: '1'}} offset="0.3233"/>
					<stop id="stop4801" style={{stopColor: '#c92037', stopOpacity: '1'}} offset="0.63020003"/>
					<stop id="stop4803" style={{stopColor: '#cd2335', stopOpacity: '1'}} offset="0.75139999"/>
					<stop id="stop4805" style={{stopColor: '#e97826', stopOpacity: '1'}} offset="1"/>
				</linearGradient>
				<path d="m 212.7,262.8 c -1,0.2 -2,0.3 -3.1,0.5 l 0,0 c 1,-0.2 2,-0.4 3.1,-0.5 z" id="path4807"
				      style={{fill: 'url(#linearGradient5358)'}}/>
				<path d="m 220.7,236.9 c 0.3,0 0.6,-0.1 1,-0.1 -0.3,0 -0.6,0.1 -1,0.1 l 0,0 z" id="path4809"
				      style={{fill: '#be202e'}}/>
				<path d="m 220.7,236.9 c 0.3,0 0.6,-0.1 1,-0.1 -0.3,0 -0.6,0.1 -1,0.1 l 0,0 z" id="path4811"
				      style={{opacity: '0.35', fill: '#be202e'}}/>
				<linearGradient x1="-8238.3281" y1="-747.58557" x2="-7698.647" y2="-747.58557" id="SVGID_9_"
				                gradientUnits="userSpaceOnUse"
				                gradientTransform="matrix(0.4226,-0.9063,0.9063,0.4226,4226.9761,-6584.5938)">
					<stop id="stop4814" style={{stopColor: '#9e2064', stopOpacity: '1'}} offset="0.3233"/>
					<stop id="stop4816" style={{stopColor: '#c92037', stopOpacity: '1'}} offset="0.63020003"/>
					<stop id="stop4818" style={{stopColor: '#cd2335', stopOpacity: '1'}} offset="0.75139999"/>
					<stop id="stop4820" style={{stopColor: '#e97826', stopOpacity: '1'}} offset="1"/>
				</linearGradient>
				<path d="m 220.7,236.9 c 0.3,0 0.6,-0.1 1,-0.1 -0.3,0 -0.6,0.1 -1,0.1 l 0,0 z" id="path4822"
				      style={{fill: 'url(#linearGradient5360)'}}/>
				<path d="m 220.8,236.9 c 0,0 0,0 0,0 l 0,0 0,0 0,0 c 0,0 0,0 0,0 z" id="path4824" style={{fill: '#be202e'}}/>
				<path d="m 220.8,236.9 c 0,0 0,0 0,0 l 0,0 0,0 0,0 c 0,0 0,0 0,0 z" id="path4826"
				      style={{opacity: '0.35', fill: '#be202e'}}/>
				<linearGradient x1="-7935.1431" y1="-747.9668" x2="-7815.856" y2="-747.9668" id="SVGID_10_"
				                gradientUnits="userSpaceOnUse"
				                gradientTransform="matrix(0.4226,-0.9063,0.9063,0.4226,4226.9761,-6584.5938)">
					<stop id="stop4829" style={{stopColor: '#9e2064', stopOpacity: '1'}} offset="0.3233"/>
					<stop id="stop4831" style={{stopColor: '#c92037', stopOpacity: '1'}} offset="0.63020003"/>
					<stop id="stop4833" style={{stopColor: '#cd2335', stopOpacity: '1'}} offset="0.75139999"/>
					<stop id="stop4835" style={{stopColor: '#e97826', stopOpacity: '1'}} offset="1"/>
				</linearGradient>
				<path d="m 220.8,236.9 c 0,0 0,0 0,0 l 0,0 0,0 0,0 c 0,0 0,0 0,0 z" id="path4837"
				      style={{fill: 'url(#linearGradient5362)'}}/>
			</g>
		</g>
		<g transform="translate(385.61463,-191.53704)" id="g4845"/>
		<g transform="translate(385.61463,-191.53704)" id="g4847"/>
		<g transform="translate(385.61463,-191.53704)" id="g4849"/>
		<g transform="translate(385.61463,-191.53704)" id="g4851"/>
		<g transform="translate(385.61463,-191.53704)" id="g4853"/>
		<g transform="translate(385.61463,-191.53704)" id="g4855"/>
	</svg>
)

export const CucumberLogo = ({className}: { className?: string }) => (
	<svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
		<path fill="#00A818"
		      d="M92.2 8.3c-1-.6-2-1.2-3-1.7l-3.3-1.5c-.4-.1-.7-.3-1.1-.4-1-.4-1.9-.8-2.9-1.1C76.5 1.8 70.8.9 64.8.9 34.3.9 9.7 25.6 9.7 56.1c0 26.9 19.2 49.2 44.5 54.2v15.8c32.9-5 62.1-31.2 64.3-65.6 1.3-20.8-9-42-26.3-52.2zM51.6 21.6c1.8-.2 3.8.5 5.1 2.1 1 1 1.6 2.3 2.3 3.7 2 4.7 1.3 9.8-1.4 13.5-4.7-1-9-4-11-8.7-.7-1.3-1.1-3.1-1.1-4.4.1-3.4 3-5.9 6.1-6.2zM35.1 37.9h1.1c1.7 0 3 .4 4.7 1.1 4.7 2 8.1 6 9.1 10.4-4 2.7-9.5 3.4-14.2 1.4-1.3-.7-2.6-1.4-4-2.4-4.4-3.6-2-10.3 3.3-10.5zm1.1 34.7c-6.1.3-9-6.7-4.6-10.4 1-1 2.3-1.7 4-2.4 1.8-.8 3.6-1.1 5.5-1.2 3.1-.1 6.1.8 8.6 2.5-.7 4.4-4 8.4-8.7 10.4-1.5.8-3.2 1.1-4.8 1.1zm23.2 9.8c-.7 1.3-1.3 2.7-2.3 4-3.4 4.4-11.2 1.3-10.8-4.4 0-1.3.4-3 1.1-4.3 2-4.7 6-7.7 10.7-8.7 2.6 4 3.3 9.1 1.3 13.4zm9.1-55c.7-1.3 1.3-2.7 2.3-4 1.4-1.6 3.4-2.3 5.3-2.1 3.1.3 6.1 2.8 5.9 6.4 0 1.3-.4 3.1-1.1 4.4-2 4.7-6 7.7-10.7 8.7-3-3.6-3.7-8.6-1.7-13.4zm3 59c-1-1-1.6-2.3-2.3-3.7-2-4.7-1.3-9.8 1.4-13.5 4.7 1 9 4 11 8.7.7 1.3 1.1 3.1 1.1 4.4.2 5.2-7.5 8.2-11.2 4.1zm20.6-14.1c-1.7 0-3-.4-4.7-1.1-4.7-2-8.1-6-9.1-10.4 2.5-1.7 5.6-2.6 8.7-2.5 1.8 0 3.7.4 5.5 1.2 1.3.7 2.6 1.3 4 2.3 4.6 3.4 1.6 10.9-4.4 10.5z"/>
	</svg>
)