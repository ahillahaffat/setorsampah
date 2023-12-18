import React from "react";
interface TeamMemberProps {
  name: string;
  role: string;
  imageSrc: string;
  githubLink: string;
  instagramLink: string;
  linkedinLink: string;
}
const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  imageSrc,
  githubLink,
  instagramLink,
  linkedinLink,
}) => (
  <div className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
    <div className="group shadow-md mb-8 rounded-xl bg-gradient-to-bl from-green-800 via-green-50 to-green-201 px-5 pt-12 pb-10">
      <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
        <img
          src={imageSrc}
          alt={`Team member ${name}`}
          className="h-[120px] w-[120px] rounded-full"
        />
        <span className="bg-green-50 absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full opacity-0 transition-all group-hover:opacity-100"></span>
        <span className="absolute top-0 right-0 -z-10 opacity-0 transition-all group-hover:opacity-100">
          <svg
            width="55"
            height="53"
            viewBox="0 0 55 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.5118 3.1009C13.3681 3.1009 14.0622 2.40674 14.0622 1.55045C14.0622 0.69416 13.3681 0 12.5118 0C11.6555 0 10.9613 0.69416 10.9613 1.55045C10.9613 2.40674 11.6555 3.1009 12.5118 3.1009Z"
              fill="#3758F9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.5038 3.1009C23.3601 3.1009 24.0543 2.40674 24.0543 1.55045C24.0543 0.69416 23.3601 0 22.5038 0C21.6475 0 20.9534 0.69416 20.9534 1.55045C20.9534 2.40674 21.6475 3.1009 22.5038 3.1009Z"
              fill="#3758F9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M32.4958 3.1009C33.3521 3.1009 34.0463 2.40674 34.0463 1.55045C34.0463 0.69416 33.3521 0 32.4958 0C31.6395 0 30.9454 0.69416 30.9454 1.55045C30.9454 2.40674 31.6395 3.1009 32.4958 3.1009Z"
              fill="#3758F9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M42.4875 3.1009C43.3438 3.1009 44.038 2.40674 44.038 1.55045C44.038 0.69416 43.3438 0 42.4875 0C41.6312 0 40.9371 0.69416 40.9371 1.55045C40.9371 2.40674 41.6312 3.1009 42.4875 3.1009Z"
              fill="#3758F9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M52.4795 3.1009C53.3358 3.1009 54.03 2.40674 54.03 1.55045C54.03 0.69416 53.3358 0 52.4795 0C51.6233 0 50.9291 0.69416 50.9291 1.55045C50.9291 2.40674 51.6233 3.1009 52.4795 3.1009Z"
              fill="#3758F9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.52045 13.0804C3.37674 13.0804 4.0709 12.3862 4.0709 11.5299C4.0709 10.6737 3.37674 9.97949 2.52045 9.97949C1.66416 9.97949 0.970001 10.6737 0.970001 11.5299C0.970001 12.3862 1.66416 13.0804 2.52045 13.0804Z"
              fill="#3758F9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.5118 13.0804C13.3681 13.0804 14.0622 12.3862 14.0622 11.5299C14.0622 10.6737 13.3681 9.97949 12.5118 9.97949C11.6555 9.97949 10.9613 10.6737 10.9613 11.5299C10.9613 12.3862 11.6555 13.0804 12.5118 13.0804Z"
              fill="#3758F9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.5038 13.0804C23.3601 13.0804 24.0543 12.3862 24.0543 11.5299C24.0543 10.6737 23.3601 9.97949 22.5038 9.97949C21.6475 9.97949 20.9534 10.6737 20.9534 11.5299C20.9534 12.3862 21.6475 13.0804 22.5038 13.0804Z"
              fill="#3758F9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M32.4958 13.0804C33.3521 13.0804 34.0463 12.3862 34.0463 11.5299C34.0463 10.6737 33.3521 9.97949 32.4958 9.97949C31.6395 9.97949 30.9454 10.6737 30.9454 11.5299C30.9454 12.3862 31.6395 13.0804 32.4958 13.0804Z"
              fill="#3758F9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M42.4875 13.0804C43.3438 13.0804 44.038 12.3862 44.038 11.5299C44.038 10.6737 43.3438 9.97949 42.4875 9.97949C41.6312 9.97949 40.9371 10.6737 40.9371 11.5299C40.9371 12.3862 41.6312 13.0804 42.4875 13.0804Z"
              fill="#3758F9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M52.4795 13.0804C53.3358 13.0804 54.03 12.3862 54.03 11.5299C54.03 10.6737 53.3358 9.97949 52.4795 9.97949C51.6233 9.97949 50.9291 10.6737 50.9291 11.5299C50.9291 12.3862 51.6233 13.0804 52.4795 13.0804Z"
              fill="#3758F9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.52045 23.0604C3.37674 23.0604 4.0709 22.3662 4.0709 21.5099C4.0709 20.6536 3.37674 19.9595 2.52045 19.9595C1.66416 19.9595 0.970001 20.6536 0.970001 21.5099C0.970001 22.3662 1.66416 23.0604 2.52045 23.0604Z"
              fill="#3758F9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.5118 23.0604C13.3681 23.0604 14.0622 22.3662 14.0622 21.5099C14.0622 20.6536 13.3681 19.9595 12.5118 19.9595C11.6555 19.9595 10.9613 20.6536 10.9613 21.5099C10.9613 22.3662 11.6555 23.0604 12.5118 23.0604Z"
              fill="#3758F9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.5038 23.0604C23.3601 23.0604 24.0543 22.3662 24.0543 21.5099C24.0543 20.6536 23.3601 19.9595 22.5038 19.9595C21.6475 19.9595 20.9534 20.6536 20.9534 21.5099C20.9534 22.3662 21.6475 23.0604 22.5038 23.0604Z"
              fill="#3758F9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M32.4958 23.0604C33.3521 23.0604 34.0463 22.3662 34.0463 21.5099C34.0463 20.6536 33.3521 19.9595 32.4958 19.9595C31.6395 19.9595 30.9454 20.6536 30.9454 21.5099C30.9454 22.3662 31.6395 23.0604 32.4958 23.0604Z"
              fill="#3758F9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M42.4875 23.0604C43.3438 23.0604 44.038 22.3662 44.038 21.5099C44.038 20.6536 43.3438 19.9595 42.4875 19.9595C41.6312 19.9595 40.9371 20.6536 40.9371 21.5099C40.9371 22.3662 41.6312 23.0604 42.4875 23.0604Z"
              fill="#3758F9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M52.4795 23.0604C53.3358 23.0604 54.03 22.3662 54.03 21.5099C54.03 20.6536 53.3358 19.9595 52.4795 19.9595C51.6233 19.9595 50.9291 20.6536 50.9291 21.5099C50.9291 22.3662 51.6233 23.0604 52.4795 23.0604Z"
              fill="#3758F9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.52045 33.0404C3.37674 33.0404 4.0709 32.3462 4.0709 31.4899C4.0709 30.6336 3.37674 29.9395 2.52045 29.9395C1.66416 29.9395 0.970001 30.6336 0.970001 31.4899C0.970001 32.3462 1.66416 33.0404 2.52045 33.0404Z"
              fill="#3758F9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.5118 33.0404C13.3681 33.0404 14.0622 32.3462 14.0622 31.4899C14.0622 30.6336 13.3681 29.9395 12.5118 29.9395C11.6555 29.9395 10.9613 30.6336 10.9613 31.4899C10.9613 32.3462 11.6555 33.0404 12.5118 33.0404Z"
              fill="#3758F9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.5038 33.0404C23.3601 33.0404 24.0543 32.3462 24.0543 31.4899C24.0543 30.6336 23.3601 29.9395 22.5038 29.9395C21.6475 29.9395 20.9534 30.6336 20.9534 31.4899C20.9534 32.3462 21.6475 33.0404 22.5038 33.0404Z"
              fill="#3758F9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M32.4958 33.0404C33.3521 33.0404 34.0463 32.3462 34.0463 31.4899C34.0463 30.6336 33.3521 29.9395 32.4958 29.9395C31.6395 29.9395 30.9454 30.6336 30.9454 31.4899C30.9454 32.3462 31.6395 33.0404 32.4958 33.0404Z"
              fill="#3758F9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M42.4875 33.0404C43.3438 33.0404 44.038 32.3462 44.038 31.4899C44.038 30.6336 43.3438 29.9395 42.4875 29.9395C41.6312 29.9395 40.9371 30.6336 40.9371 31.4899C40.9371 32.3462 41.6312 33.0404 42.4875 33.0404Z"
              fill="#3758F9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M52.4795 33.0404C53.3358 33.0404 54.03 32.3462 54.03 31.4899C54.03 30.6336 53.3358 29.9395 52.4795 29.9395C51.6233 29.9395 50.9291 30.6336 50.9291 31.4899C50.9291 32.3462 51.6233 33.0404 52.4795 33.0404Z"
              fill="#3758F9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.52045 43.0203C3.37674 43.0203 4.0709 42.3262 4.0709 41.4699C4.0709 40.6136 3.37674 39.9194 2.52045 39.9194C1.66416 39.9194 0.970001 40.6136 0.970001 41.4699C0.970001 42.3262 1.66416 43.0203 2.52045 43.0203Z"
              fill="#3758F9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.5118 43.0203C13.3681 43.0203 14.0622 42.3262 14.0622 41.4699C14.0622 40.6136 13.3681 39.9194 12.5118 39.9194C11.6555 39.9194 10.9613 40.6136 10.9613 41.4699C10.9613 42.3262 11.6555 43.0203 12.5118 43.0203Z"
              fill="#3758F9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.5038 43.0203C23.3601 43.0203 24.0543 42.3262 24.0543 41.4699C24.0543 40.6136 23.3601 39.9194 22.5038 39.9194C21.6475 39.9194 20.9534 40.6136 20.9534 41.4699C20.9534 42.3262 21.6475 43.0203 22.5038 43.0203Z"
              fill="#3758F9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M32.4958 43.0203C33.3521 43.0203 34.0463 42.3262 34.0463 41.4699C34.0463 40.6136 33.3521 39.9194 32.4958 39.9194C31.6395 39.9194 30.9454 40.6136 30.9454 41.4699C30.9454 42.3262 31.6395 43.0203 32.4958 43.0203Z"
              fill="#3758F9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M42.4875 43.0203C43.3438 43.0203 44.038 42.3262 44.038 41.4699C44.038 40.6136 43.3438 39.9194 42.4875 39.9194C41.6312 39.9194 40.9371 40.6136 40.9371 41.4699C40.9371 42.3262 41.6312 43.0203 42.4875 43.0203Z"
              fill="#3758F9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M52.4795 43.0203C53.3358 43.0203 54.03 42.3262 54.03 41.4699C54.03 40.6136 53.3358 39.9194 52.4795 39.9194C51.6233 39.9194 50.9291 40.6136 50.9291 41.4699C50.9291 42.3262 51.6233 43.0203 52.4795 43.0203Z"
              fill="#3758F9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.52045 53.0001C3.37674 53.0001 4.0709 52.3059 4.0709 51.4496C4.0709 50.5933 3.37674 49.8992 2.52045 49.8992C1.66416 49.8992 0.970001 50.5933 0.970001 51.4496C0.970001 52.3059 1.66416 53.0001 2.52045 53.0001Z"
              fill="#3758F9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.5118 53.0001C13.3681 53.0001 14.0622 52.3059 14.0622 51.4496C14.0622 50.5933 13.3681 49.8992 12.5118 49.8992C11.6555 49.8992 10.9613 50.5933 10.9613 51.4496C10.9613 52.3059 11.6555 53.0001 12.5118 53.0001Z"
              fill="#3758F9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.5038 53.0001C23.3601 53.0001 24.0543 52.3059 24.0543 51.4496C24.0543 50.5933 23.3601 49.8992 22.5038 49.8992C21.6475 49.8992 20.9534 50.5933 20.9534 51.4496C20.9534 52.3059 21.6475 53.0001 22.5038 53.0001Z"
              fill="#3758F9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M32.4958 53.0001C33.3521 53.0001 34.0463 52.3059 34.0463 51.4496C34.0463 50.5933 33.3521 49.8992 32.4958 49.8992C31.6395 49.8992 30.9454 50.5933 30.9454 51.4496C30.9454 52.3059 31.6395 53.0001 32.4958 53.0001Z"
              fill="#3758F9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M42.4875 53.0001C43.3438 53.0001 44.038 52.3059 44.038 51.4496C44.038 50.5933 43.3438 49.8992 42.4875 49.8992C41.6312 49.8992 40.9371 50.5933 40.9371 51.4496C40.9371 52.3059 41.6312 53.0001 42.4875 53.0001Z"
              fill="#3758F9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M52.4795 53.0001C53.3358 53.0001 54.03 52.3059 54.03 51.4496C54.03 50.5933 53.3358 49.8992 52.4795 49.8992C51.6233 49.8992 50.9291 50.5933 50.9291 51.4496C50.9291 52.3059 51.6233 53.0001 52.4795 53.0001Z"
              fill="#3758F9"
            />
          </svg>
        </span>
      </div>
      <div className="text-center">
        <h4 className="mb-1 text-lg font-semibold text-white">{name}</h4>
        <p className="text-white mb-5 text-sm">{role}</p>
        <div className="flex items-center gap-5 justify-center">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 text-white"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current"
            >
              <path
                fill-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
          </a>
          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E1306C] text-white"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
            </svg>
          </a>
          <a
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0077B5] text-white"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/> </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Team = () => {
  const teamMembers = [
    {
      name: "Ahilla Haffat Kammala",
      role: "Front-End",
      imageSrc: "/team/ahil.jpg",
      githubLink: "https://github.com/ahillahaffat",
      instagramLink:
        "https://www.instagram.com/ahillahaffat?igshid=NGVhN2U2NjQ0Yg==",
      linkedinLink:
        "https://www.linkedin.com/in/ahilla-kammala-7164b3280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Ayub Budi Santoso",
      role: "Front-End",
      imageSrc: "/team/ayub.png",
      githubLink: "https://github.com/Ayub-Budi",
      instagramLink:
        "https://www.instagram.com/ayub_budi213?igshid=OGQ5ZDc2ODk2ZA==",
      linkedinLink: "https://www.linkedin.com/in/ayub09/",
    },
    {
      name: "Bima Arya Kurniawan",
      role: "Front-End dan Back-End",
      imageSrc: "/team/bima.png",
      githubLink: "https://github.com/kaamibb",
      instagramLink: "https://www.instagram.com/bimaryak_/",
      linkedinLink: "https://www.linkedin.com/in/kamibb/",
    },
    {
      name: "Marchel Adias Pradana",
      role: "Front-End",
      imageSrc: "/team/marcel.jpg",
      githubLink: "https://github.com/ayubbs",
      instagramLink: "https://www.instagram.com/ayubbs/",
      linkedinLink: "https://www.linkedin.com/in/ayubbs/",
    },
  ];

  return (
    <section className="p-8 lg:pb-[70px]">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="pt-16 pb-8 md:pt-20">
            <div className="text-center pb-8 md:pb-16">
              <h1
                className="regular-32 md:regular-40 2xl:regular-72 mb-4"
                data-aos="zoom-y-out"
              >
                <strong>Our </strong>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-800 via-green-50 to-green-201">
                  <strong>Team</strong>
                </span>
              </h1>
              <div className="max-w-3xl mx-auto">
                <p
                  className="text-md md:text-xl lg:text-lg text-gray-120"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  Selamat datang di Tim Pengembangan Aplikasi Setor Sampah kami!
                  Kami adalah kelompok yang berkomitmen untuk menciptakan solusi
                  inovatif guna mendukung pengelolaan sampah di wilayah taman
                  nasional dan gunung-gunung di Indonesia. Dengan beragam latar
                  belakang dan keahlian, kami bersatu untuk mewujudkan visi
                  keberlanjutan dalam pelestarian lingkungan.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              imageSrc={member.imageSrc}
              githubLink={member.githubLink}
              instagramLink={member.instagramLink}
              linkedinLink={member.linkedinLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
